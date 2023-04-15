import React, { useState } from 'react'
import { TranscribeFormStyles } from './TranscribeForm.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function TranscribeForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [price, setPrice] = useState(0)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsLoading(true)

    const file = e.target[0].files[0]
    const format = e.target[1].value
    const data = new FormData()
    data.append('file', file)
    data.append('format', format)

    try {
      // change to prod server
      const res = await fetch("http://localhost:8080/transcribe/", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}\ntext: ${res.statusText}`)
      }

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      console.log("url: ", url)
      const a = document.createElement('a')
      a.href = url
      switch (format) {
        case 'srt':
          a.download = `${file.name}.srt`
          break
        case 'vtt':
          a.download = `${file.name}.vtt`
          break
        case 'text':
          a.download = `${file.name}.txt`
          break
      }
      a.click()
      a.remove()

    }
    catch (err) {
      console.log('Fetch error: ', err)
    }

    setIsLoading(false)
  }

  const handleChange = (e:any) => {
    e.preventDefault()
    const file = e.target.files[0]
    if (!file) return
    const audioObj = new Audio(URL.createObjectURL(file));

    audioObj.addEventListener('loadedmetadata', () => {
      const durationInMin = audioObj.duration / 60 // divide by 60 to convert seconds to minutes
      const costPerMin: number = 0.05
      const totalPrice = durationInMin * costPerMin
      setPrice(totalPrice)
      URL.revokeObjectURL(audioObj.src)
    })

  } 

  return (
    <TranscribeFormStyles
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <input
        id="file"
        type="file"
        name="file"
        accept=".mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
      />
      <select name="format" id="format">
        <option value="text">Text</option>
        <optgroup label="Caption files">
          <option value="srt">SRT</option>
          <option value="vtt">VTT</option>
        </optgroup>
      </select>
      { isLoading ? (
          <FontAwesomeIcon
            className="spinner"
            icon={faSpinner}
            spin
            style={{ marginTop: "1rem" }}
          />
        ) : (
          <>
            <input id='submit' type='submit' name='submit' value='Transcribe' />
            <span>{'$' + price.toFixed(2)}</span>
          </>
        )
      }
    </TranscribeFormStyles>
  )
}