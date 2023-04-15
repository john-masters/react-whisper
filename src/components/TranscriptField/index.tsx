import React from 'react'
import { TranscriptFieldStyles } from './TranscriptField.styles'

interface Props {
  transcript: string;
  link: HTMLAnchorElement | null;
}

export default function TranscriptField(props: Props) {
  const { transcript, link } = props

  return (
    <TranscriptFieldStyles >
      <textarea 
        disabled={true}
        value={transcript}
      />
      {link ? <div onClick={() => link.click()}>Download</div> : null}
    </TranscriptFieldStyles>
  )
}
