import React, { useState } from 'react'
import TranscribeForm from './components/TranscribeForm'
import Header from './components/Header'
import TranscriptField from './components/TranscriptField'
import { AppStyles } from './App.styles'
import PaymentForm from './components/PaymentForm'

export default function App() {
  const [transcript, setTranscipt] = useState<string>('')
  const [link, setLink] = useState<HTMLAnchorElement | null>(null)
  const [format, setFormat] = useState<string>('text')
  const [price, setPrice] = useState<number>(0)
  const [file, setFile] = useState<File | null>(null)
  const [paymentSucceeded, setPaymentSucceeded] = useState<boolean>(false)

  const handlePaymentSuccess = (succeeded: boolean) => {
    setPaymentSucceeded(succeeded)
  }


  return (
    <AppStyles>
      <Header />
      <TranscribeForm
        setTranscript={setTranscipt}
        setLink={setLink}
        setFormat={setFormat}
        price={price}
        setPrice={setPrice}
        setFile={setFile}
        paymentSucceeded={paymentSucceeded}
      />

      {file && (
        <PaymentForm
          file={file}
          price={price}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}

      {transcript && (
        <TranscriptField
          transcript={transcript}
          link={link}
          format={format}
        />
      )}
    </AppStyles>
  )
}
