import React from 'react'
import { FileInputStyles } from './FileInput.styles'
import { useAppContext } from '../../AppContext';

export default function FileInput() {

  const {
    setPriceInCents,
    file,
    setFile,
    isDarkMode,
    setError,
  } = useAppContext();

  const allowedFileTypes = [
    'audio/mp3',
    'audio/mp4',
    'audio/mpeg',
    'audio/mpga',
    'audio/x-m4a',
    'audio/wav',
    'audio/webm',
  ];

  const handleChange = (e: any) => {
    setError("")
    e.preventDefault();
    const file = e.target.files[0];

    // removed as files are now compressed to 16k mp3
    // TODO: figure out new limits

    // const fileSizeInMegabytes = file.size / 1000000;
    // if (!file || fileSizeInMegabytes > 25) {
    //   setError("File size must be less than 25MB");
    //   return;
    // }

    if (!allowedFileTypes.includes(file.type)) {
      setError("File type must be mp3, mp4, mpeg, mpga, m4a, wav, or webm");
      return;
    }

    setFile(file);

    const audioObj = new Audio(URL.createObjectURL(file));

    audioObj.addEventListener("loadedmetadata", () => {
      const durationInSeconds = audioObj.duration;
      const durationInMinutes = durationInSeconds / 60;

      const centsPerMinute: number = 5;

      let totalPrice = Math.floor(durationInMinutes * centsPerMinute);
      totalPrice = Math.max(totalPrice, 50);

      setPriceInCents(totalPrice);
      URL.revokeObjectURL(audioObj.src);
    });
  };

  return (
    <FileInputStyles isDarkMode={isDarkMode}>

      <label htmlFor="file">
        <span style={{ color: file ? "green" : "inherit" }}>
          {file ? file.name : "Upload file"}
        </span>

        <input
          id="file"
          type="file"
          name="file"
          accept=".mp3, .mp4, .mpeg, .mpga, .m4a, .wav, .webm"
          onChange={handleChange}
        />
      </label>

    </FileInputStyles>
  )
}
