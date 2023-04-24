import React from "react";
import { PaymentFormStyles } from "./PaymentForm.styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm";

const promise = loadStripe(
  "pk_test_51MpVLcJD5XPjP7WOM5mkku4D4U3WRWHgPOtwdbLQeeqtPkZjD9LK6dKiJNiSDILUnvd6vJ8QSYSeq3JNxzmwFqNf00kF49ElzP" // test
  // "pk_live_51MpVLcJD5XPjP7WOUggIUwacT7CQBzKHNAzyoucXfBOX3wtTAzieiXEWBeqviAmf3ZtagfkanJF1S5d8b7Le2y0M0084HX42lS" // prod
);

interface Props {
  file: File | null;
  priceInCents: number;
  succeeded: boolean;
  setSucceeded(succeeded: boolean): void;
  isDarkMode: boolean;
  width: number;
}

export default function PaymentForm(props: Props) {

  const {
    file,
    priceInCents,
    succeeded,
    setSucceeded,
    isDarkMode,
    width,
  } = props;

  return (
    <PaymentFormStyles width={width}>
      <Elements stripe={promise}>
        <CheckoutForm
          file={file}
          priceInCents={priceInCents}
          succeeded={succeeded}
          setSucceeded={setSucceeded}
          isDarkMode={isDarkMode}
        />
      </Elements>
    </PaymentFormStyles>
  );
}
