import { useState } from 'react'

export default () => {
  const [file, setFile] = useState(null)
  
  async function handleSubmit(e:any) {
    e.preventDefault()

    // const reader = new FileReader()
    const file = e.target[0].files[0]

    const fileURL = URL.createObjectURL(file)

    const data = new FormData()
    data.append('file', file)

    // reader.addEventListener('load', async () => {
      try {
        const res = await fetch("http://localhost:8080/", {
          method: "POST",
          // headers: {"Content-Type": "multipart/form-data"},
          // body: reader.result
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({fileURL})
        })
        console.log("res: ", res)
      }

      catch (err) {
        console.log("err: ", err)
      }
      // console.log(reader.result?.toString())
    // })
    // reader.readAsBinaryString(file)

  }

  return (
    <div className="App">
      <h1>Transcribe</h1>
      <form onSubmit={handleSubmit}>
          <input
            type="file"
            placeholder="Path to file"
            accept=".mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
          />
        <input id="submit" type="submit" value="Transcribe"/>
      </form>
    </div>
  )
}