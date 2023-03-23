import {v4 as uuidv4} from 'uuid'
export default () => {
  
// TODO: Add error handling for handleSubmit

  // async function handleSubmit(e:any) {
  //   e.preventDefault()

  //   const file = e.target[0].files[0]
  //   if (!file) return

  //   const reader = new FileReader()

  //   reader.addEventListener('load', async () => {

  //     try {
  //       // const boundary = Math.random().toString().slice(2);
  //       const boundary = uuidv4()
  //       const data = new FormData()
  //       const blob = new Blob([reader.result], {type: file.type})
  //       data.append('file', blob)

  //       const res = await fetch('http://localhost:8080', {
  //         method: 'POST',
  //         headers: {'Content-Type': `multipart/form-data; boundary=${boundary}`},
  //         // body: reader.result
  //         body: data
  //       })
  //       console.log('res: ', res)
  //     }

  //     catch (err) {
  //       console.log('err: ', err)
  //     }

  //     // console.log(reader.result)
  //     // console.log(reader.result?.toString())
  //   })
  //   // console.log(file)
  //   reader.readAsArrayBuffer(file)
  // }

  let file:any

  const handleSubmit = () => {
    console.log("submitted")

    const data = new FormData()
    data.append('file', file)

    try {
      const res = fetch('http://localhost:8080', {
        method: 'POST',
        body: data
      })
      console.log('res: ', res)
    }
    catch (err) {
      console.log('err: ', err)
    }

  }

  const handleChange = (e:any) => {
    console.log("changed")
    const file = e.target[0].files[0]

  }

  return (
    <div className='App'>
      <h1>Transcribe</h1>
      <form onSubmit={handleSubmit}>
      {/* <form encType="multipart/form-data" action="http://localhost:8080/" method="POST"> */}
          <input
            id='file'
            type='file'
            name='file'
            placeholder='Path to file'
            accept='.mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm'
            onChange={handleChange}
          />
        <input id='submit' type='submit' value='Transcribe'/>
      </form>
    </div>
  )
}