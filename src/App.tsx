export default () => {
  
  async function handleSubmit(e:any) {
    e.preventDefault()

    const file = e.target[0].files[0]
    const reader = new FileReader()

    reader.addEventListener('load', async () => {
      try {
        const res = await fetch('http://localhost:8080', {
          method: 'POST',
          headers: {'Content-Type': 'multipart/form-data'},
          body: reader.result
        })
        console.log('res: ', res)
      }

      catch (err) {
        console.log('err: ', err)
      }
      // console.log(reader.result?.toString())
    })
    reader.readAsBinaryString(file)

  }

  return (
    <div className='App'>
      <h1>Transcribe</h1>
      <form onSubmit={handleSubmit}>
          <input
            id='file'
            type='file'
            placeholder='Path to file'
            accept='.mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm'
          />
        <input id='submit' type='submit' value='Transcribe'/>
      </form>
    </div>
  )
}