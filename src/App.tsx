import React, { useState } from 'react'
import styled from 'styled-components'
import TranscribeForm from './components/TranscribeForm'
import Header from './components/Header'
import TranscriptField from './components/TranscriptField'

export default function App() {
  const [transcript, setTranscipt] = useState<string>('')

  const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <App>
      <Header />
      <TranscribeForm setTranscript={setTranscipt} />
      <TranscriptField transcript={transcript} />
    </App>
  )
}
