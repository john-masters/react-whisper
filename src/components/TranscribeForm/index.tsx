import React, { useState, useEffect, useRef } from 'react'
import { TranscribeFormStyles } from './TranscribeForm.styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import PaymentForm from '../PaymentForm';

interface Props {
  setTranscript(transcript: string): void;
  setLink(link: HTMLAnchorElement | null): void;
  setFormat(format: string): void;
  price: number;
  setPrice(price: number): void;
  setFile(file: File | null): void;
  paymentSucceeded: boolean;
}

export default function TranscribeForm(props: Props) {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const formRef = useRef<HTMLFormElement>(null); // Add this line to create a form ref

  const {
    setTranscript,
    setLink,
    setFormat,
    price,
    setPrice,
    setFile,
    paymentSucceeded
  } = props
  
  useEffect (() => {
    if (paymentSucceeded && formRef.current) {
      formRef.current?.requestSubmit()
    }
  }, [paymentSucceeded])

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsLoading(true)

    const file = e.target[0].files[0]
    const format = e.target[1].value
    const data = new FormData()
    setFormat(format)
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

      const text = await res.text()
      setTranscript(text)
      const blob = new Blob([text], { type: 'text/plain' })

      const url = window.URL.createObjectURL(blob)
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

      setLink(a)
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
    setFile(file)
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
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <input
        id="file"
        type="file"
        name="file"
        accept=".mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
        onChange={handleChange}
      />

      <div className='formatContainer'>
        <label htmlFor='format'>Format: </label>
        <select name="format" id="format">
          <option value="text">Text</option>
          <optgroup label="Caption files">
            <option value="srt">SRT</option>
            <option value="vtt">VTT</option>
          </optgroup>
        </select>
      </div>

      {isLoading && (
        <FontAwesomeIcon
        className="spinner"
        icon={faSpinner}
        spin
        style={{ marginTop: "1rem" }}
      />
      )}

    </TranscribeFormStyles>
  )
}