import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function calculateAge(birthdate) {
  const birthYear = birthdate.getFullYear();
  const birthMonth = birthdate.getMonth();
  const birthDay = birthdate.getDate();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

export function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const parts = date.toLocaleDateString(undefined, options).split(" ");
  const day = parts[1];
  const month = parts[0];
  const year = parts[2];
  return `${day} ${month} ${year}`;
}

export function formatMetDate(date) {
  const inputDate = new Date(date);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const parts = inputDate.toLocaleString("en-US", options).split(", ");
  const combined = parts[2] + " at " + parts[0] + ", " + parts[1];
  return combined;
}

export function useCustomQuery(key, endpoint) {
  return useQuery(key, async () => {
    const response = await axios.get(endpoint);
    return response.data;
  });
}

export const updateStatus = (path, upId, newStatus, refetch) => {
  const data = {
    status: newStatus,
  };
  axios
    .put(`https://soulmates-server.vercel.app/${path}/${upId}`, data)
    .then((response) => {
      if (response.data.modifiedCount > 0) {
        refetch();
      }
    });
};

export const useProposalInfo = (id) => {
  const { refetch: refetchProposal, data: proposal = [] } = useCustomQuery(
    ["proposal", id],
    `https://soulmates-server.vercel.app/getProposal/${id}`
  );

  return { refetchProposal, proposal };
};
