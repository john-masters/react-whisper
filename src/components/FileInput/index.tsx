import React from 'react'
import { FileInputStyles } from './FileInput.styles'

interface Props {
  setPriceInCents(priceInCents: number): void;
  file: File | null;
  setFile(file: File | null): void;
  isDarkMode: boolean;
}

export default function FileInput(props: Props) {

  const {
    setPriceInCents,
    file,
    setFile,
    isDarkMode,
  } = props;

  const handleChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileSizeInMegabytes = file.size / 1000000;

    if (!file || fileSizeInMegabytes > 25) return;
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
