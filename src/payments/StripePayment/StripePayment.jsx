import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useLocation } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PK);

const StripePayment = () => {
  const url = useLocation();
  const searchParams = new URLSearchParams(url.search);
  const plan = searchParams.get("plan");
  const decodedData = JSON.parse(atob(plan));

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm decodedData={decodedData} />
    </Elements>
  );
};

export default StripePayment;
