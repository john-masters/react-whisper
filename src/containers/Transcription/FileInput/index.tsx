import React from "react";
import { FileInputStyles } from "./FileInput.styles";
import { useAppContext } from "../../../AppContext";

export default function FileInput() {
  const { setPriceInCents, file, setFile, isDarkMode, setError } =
    useAppContext();

  const handleChange = (e: any) => {
    setError("");
    e.preventDefault();
    const file = e.target.files[0];

    // const fileSizeInMegabytes = file.size / 1000000;
    // if (!file || fileSizeInMegabytes > 25) {
    //   setError("File size must be less than 25MB");
    //   return;
    // }

    setFile(file);

    const audioObj = new Audio(URL.createObjectURL(file));

    audioObj.addEventListener("loadedmetadata", () => {
      const durationInSeconds = audioObj.duration;
      const durationInMinutes = durationInSeconds / 60;

      // if (durationInMinutes > 120) {
      //   setError("File duration must be less than 2 hours");
      //   setFile(null);
      //   return;
      // }

      const centsPerMinute: number = 5;

      let totalPrice = Math.floor(durationInMinutes * centsPerMinute);
      totalPrice = Math.max(totalPrice, 50);

      setPriceInCents(totalPrice);
      URL.revokeObjectURL(audioObj.src);
    });
  };

  return (
    <FileInputStyles isDarkMode={isDarkMode}>
      <label htmlFor="file">File:</label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleChange}
        // defaultValue="hello"
      />
    </FileInputStyles>
  );
}
