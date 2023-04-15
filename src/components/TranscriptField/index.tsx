import React from 'react'
import { TranscriptFieldStyles } from './TranscriptField.styles'

interface Props {
  transcript: string;
}

export default function TranscriptField(props: Props) {
  const { transcript } = props

  return (
    <TranscriptFieldStyles>
    </TranscriptFieldStyles>
  )
}
