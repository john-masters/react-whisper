import React from 'react'
import { PaymentFormStyles } from './PaymentForm.styles'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm'

const promise = loadStripe("pk_test_51MpVLcJD5XPjP7WOM5mkku4D4U3WRWHgPOtwdbLQeeqtPkZjD9LK6dKiJNiSDILUnvd6vJ8QSYSeq3JNxzmwFqNf00kF49ElzP")

interface Props {
  file: File | null;
  price: number;
  onPaymentSuccess(succeeded: boolean): void;
}

export default function PaymentForm(props: Props) {
  const {
    file,
    price,
    onPaymentSuccess
  } = props


  return (
    <PaymentFormStyles>
      <Elements stripe={promise}>
        <CheckoutForm
          file={file}
          price={price}
          onPaymentSuccess={onPaymentSuccess}
        />
      </Elements>
    </PaymentFormStyles>
  )
}
