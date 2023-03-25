import {v4 as uuidv4} from 'uuid'
export default () => {
  
// TODO: Add error handling for handleSubmit

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const file = e.target[0].files[0]
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

  return (
    <div className='App'>
      <h1>Transcribe</h1>
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
    </div>
  )
}