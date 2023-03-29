import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import styled from "styled-components"

export default () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsLoading(true)

    const file = e.target[0].files[0]
    const format = e.target[1].value
    const data = new FormData()
    data.append('file', file)
    data.append('format', format)

    try {
      const res = await fetch('http://localhost:8080', {
        method: 'POST',
        body: data
      })

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


  const Form = styled.form`
    display: flex;
    flex-direction: column;

    #submit {
      font-family: 'Figtree', sans-serif;
      font-weight: 600;
      border: 1px solid black;
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f1f1f1;
      font-size: 1rem;
      cursor: pointer;
    }

    #file {
      font-family: 'Figtree', sans-serif;
      font-weight: 600;
      border: 1px solid black;
      display: flex;
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f1f1f1;
      font-size: 1rem;
      cursor: pointer;
      color: black;
    }

    #format {
      font-family: 'Figtree', sans-serif;
      font-weight: 600;
      border: 1px solid black;
      text-align: center;
      margin-top: 1rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: #f1f1f1;
      font-size: 1rem;
      cursor: pointer;
    }
  `

  return (
    <>
      <h1>Scribe AI</h1>

      <Form onSubmit={handleSubmit}>
        <input
          id='file'
          type='file'
          name='file'
          accept='.mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm'
        />
        <select name="format" id="format">
          <option value="text">Text</option>
          <optgroup label="Caption files">
            <option value="srt">SRT</option>
            <option value="vtt">VTT</option>
          </optgroup>
        </select>
        {isLoading ? 
          <FontAwesomeIcon className='spinner' icon={faSpinner} spin style={{marginTop: "1rem"}}/>
        :
          <input id='submit' type='submit' name='submit' value='Transcribe' />
        }

      </Form>
    </>
  )

}