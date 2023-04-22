import React from 'react'
import { FormatInputStyles } from './FormatInput.styles'


interface Props {
  isDarkMode: boolean;
}

export default function FormatInput(props: Props) {
  const { isDarkMode } = props

  return (
    <FormatInputStyles isDarkMode={isDarkMode}>
      <label htmlFor="format">Format: </label>
      <select name="format" id="format">
        <option value="text">Text</option>
        <optgroup label="Caption files">
          <option value="srt">SRT</option>
          <option value="vtt">VTT</option>
        </optgroup>
      </select>
    </FormatInputStyles>
  )
}
