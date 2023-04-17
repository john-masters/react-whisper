import React from 'react'
import { TranscriptFieldStyles } from './TranscriptField.styles'

interface Props {
  transcript: string;
  link: HTMLAnchorElement | null;
  format: string;
}

export default function TranscriptField(props: Props) {
  const {
    transcript,
    link,
    format
  } = props

  const fileFormat = () => {
    switch (format) {
      case 'srt':
        return 'SRT'
      case 'vtt':
        return 'VTT'
      default:
        return 'Text'
    }
  }

  return (
    <TranscriptFieldStyles >
      { link && (
        <>
          <div id='transcriptField'>
            {transcript}
          </div>
          <button
            id='downloadButton'
            onClick={() => link.click()}
          >
            Download {fileFormat()} File
          </button>
        </>
      )}
    </TranscriptFieldStyles>
  )
}
