import React from 'react'
import { TranscriptFieldStyles } from './TranscriptField.styles'
import { useAppContext } from '../../AppContext';
import { useWindowWidth } from '../../hooks/useWindowWidth';

export default function TranscriptField() {

  const { isDarkMode, format, link, transcript } = useAppContext();

  const width = useWindowWidth();

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
    <TranscriptFieldStyles isDarkMode={isDarkMode} width={width}>
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
