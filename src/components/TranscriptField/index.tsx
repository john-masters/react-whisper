import React from 'react'
import { TranscriptFieldStyles } from './TranscriptField.styles'

interface Props {
  transcript: string;
  link: HTMLAnchorElement | null;
  format: string;
  isDarkMode: boolean;
}

export default function TranscriptField(props: Props) {
  const {
    transcript,
    link,
    format,
    isDarkMode,
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
    <TranscriptFieldStyles isDarkMode={isDarkMode}>
      { link && (
        <>
          <div id='transcriptField'>
            {transcript}
          </div>
          <div
            id='downloadButton'
            onClick={() => link.click()}
          >
            Download {fileFormat()} File
          </div>
        </>
      )}
    </TranscriptFieldStyles>
  )
}
