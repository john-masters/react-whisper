import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default () => {
  // TODO: Add error handling for handleSubmit
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)

    const file = e.target[0].files[0]
    const data = new FormData()
    data.append('file', file)

    try {
      const res = await fetch('http://localhost:8080', {
        method: 'POST',
        body: data
      })

      if (res.ok) {
        // const responseText = await res.text()
        const responseBody = await res.json()
        setResponse(responseBody.text)
        console.log("response: ", response)
        // update ui
      } else {
        console.log('Error: ', res.status, res.statusText)
        // update ui with err msg or some err handling
      }

    }
    catch (err) {
      console.log('Fetch error: ', err)
      // update ui with err msg or some err handling
    }

    setLoading(false)
  }

  const handleResponse = () => {
    if (loading && !response) {
      return (
        <FontAwesomeIcon className='spinner' icon={faSpinner} spin />
      )
    } else if (response) {
      return (
        <p className='responseText'>{response}</p>
      )
    } else {
      return (
        <form onSubmit={handleSubmit}>
            <input
              id='file'
              type='file'
              name='file'
              placeholder='Path to file'
              accept='.mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm'
            />
          <input id='submit' type='submit' value='Transcribe'/>
        </form>
      )
    } 
  }

  return (
    <div className='App'>
      <h1>Transcribe</h1>
      <div className='responseContainer'>
        {handleResponse()}
      </div>
    </div>
  )
}