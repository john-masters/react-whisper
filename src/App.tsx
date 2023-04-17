import React, { useState } from 'react'
import TranscribeForm from './components/TranscribeForm'
import Header from './components/Header'
import TranscriptField from './components/TranscriptField'
import { AppStyles } from './App.styles'

export default function App() {
  const [transcript, setTranscipt] = useState<string>('')
  const [link, setLink] = useState<HTMLAnchorElement | null>(null)

  return (
    <AppStyles>
      <Header />
      <TranscribeForm
        setTranscript={setTranscipt}
        setLink={setLink}
      />
      <TranscriptField
        transcript={transcript}
        link={link}
      />
    </AppStyles>
  )
}
