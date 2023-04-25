import React, { useEffect } from "react";
import { CheckoutFormStyles } from "./CheckoutForm.styles";
import type { StripeCardElement } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useAppContext } from "../../AppContext";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const {
    file,
    priceInCents,
    succeeded,
    setSucceeded,
    isDarkMode,
    paymentError,
    setPaymentError,
    processing,
    setProcessing,
    disabled,
    setDisabled,
    clientSecret,
    setClientSecret,
  } = useAppContext();

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const formData = new FormData();
        if (!file) return;
        formData.append("file", file);

        const res = await fetch("http://localhost:8080/create-payment-intent", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log("Fetch error: ", err);
      }
    };

    createPaymentIntent();
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Nunito, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#000",
        },
      },
      invalid: {
        fontFamily: "Nunito, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (e: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setPaymentError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) return;

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
      },
    });

    if (payload.error) {
      setPaymentError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setPaymentError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <CheckoutFormStyles
      id="payment-form"
      onSubmit={handleSubmit}
      paymentError={paymentError}
      isDarkMode={isDarkMode}
    >
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />

      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing
            ? "Processing..."
            : `Pay $${(priceInCents * 0.01).toFixed(2)} to transcribe now`}
        </span>
      </button>

      {/* Show any error that happens when processing the payment */}
      {paymentError && (
        <div className="card-error" role="alert">
          {paymentError}
        </div>
      )}
    </CheckoutFormStyles>
  );
}
