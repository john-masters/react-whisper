import React from 'react'
import { PaymentFormStyles } from './PaymentForm.styles'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../CheckoutForm'

const promise = loadStripe("pk_test_51MpVLcJD5XPjP7WOM5mkku4D4U3WRWHgPOtwdbLQeeqtPkZjD9LK6dKiJNiSDILUnvd6vJ8QSYSeq3JNxzmwFqNf00kF49ElzP")

export default function PaymentForm() {
  return (
    <PaymentFormStyles>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </PaymentFormStyles>
  )
}
