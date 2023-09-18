import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useMyData from "../../Hooks/useMyData";
// import './stripeStyle.css'

const PaymentForm = ({ decodedData }) => {
  const [userInfo] = useMyData();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();

  // TODO: Take this data dynamicall

  useEffect(() => {
    fetch("https://soulmates-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price: decodedData.price }), // set price dynamically
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [decodedData]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      console.log("not payment method", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userInfo.name,
            email: userInfo.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        userId: userInfo._id,
        name: userInfo.name,
        email: userInfo.email,
        transactionId: paymentIntent.id,
        plan: decodedData.plan,
        price: decodedData.price,
        date: new Date(),
        status: "pending",
      };

      fetch("https://soulmates-server.vercel.app/save-payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="w-full">
      <form
        className='stripefrom mx-auto my-4 m-0 flex flex-col  class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 '
        onSubmit={handleSubmit}
      >
        <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl ">
          Stripe Payment
        </h5>
        <img src="https://i.ibb.co/82q3yYg/card.png" alt="" className="mb-10" />
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-red-400 mt-10 text-white"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        {transactionId && (
          <p className="text-green-500">
            Your Transaction Id Is{transactionId}
          </p>
        )}
        {cardError && <p className="text-red-500">{cardError}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
