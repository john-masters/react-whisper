import React, { useState } from 'react'
import TranscribeForm from './components/TranscribeForm'
import Header from './components/Header'

export default function App() {
  const [transcript, setTranscipt] = useState<string>('')

  return (
    <>
      <Header />
      <TranscribeForm setTranscript={setTranscipt} />
      {transcript && <p>{transcript}</p>}
    </>
  )
}
