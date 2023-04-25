import React, { useState, useEffect, useRef } from "react";
import { TranscribeFormStyles } from "./TranscribeForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import FileInput from "../FileInput";
import FormatInput from "../FormatInput";
import { useAppContext } from '../../AppContext';

interface Props {
  width: number;
}

export default function TranscribeForm(props: Props) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const formRef = useRef<HTMLFormElement>(null); // Add this line to create a form ref

  const { width } = props;

  const {
    setTranscript,
    setLink,
    setFormat,
    priceInCents,
    setPriceInCents,
    file,
    setFile,
    succeeded,
    isDarkMode,
    error,
    setError,
  } = useAppContext();

  useEffect(() => {
    if (succeeded && formRef.current) {
      formRef.current?.requestSubmit();
    }
  }, [succeeded]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const file = e.target[0].files[0];
    const format = e.target[1].value;
    const data = new FormData();
    setFormat(format);
    data.append("file", file);
    data.append("format", format);

    try {
      const res = await fetch("http://localhost:8080/transcribe/", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error(
          `HTTP error! status: ${res.status}\ntext: ${res.statusText}`
        );
      }

      const text = await res.text();
      setTranscript(text);
      const blob = new Blob([text], { type: "text/plain" });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;

      switch (format) {
        case "srt":
          a.download = `${file.name}.srt`;
          break;
        case "vtt":
          a.download = `${file.name}.vtt`;
          break;
        case "text":
          a.download = `${file.name}.txt`;
          break;
      }

      setLink(a);
    } catch (err) {
      console.log("Fetch error: ", err);
    }

    setIsLoading(false);
  };

  return (
    <TranscribeFormStyles
      ref={formRef}
      onSubmit={handleSubmit}
      width={width}
    >

      {!isLoading ? (
        <>

          <FileInput
            file={file}
            setFile={setFile}
            setPriceInCents={setPriceInCents}
            isDarkMode={isDarkMode}
            error={error}
            setError={setError}
          />

          <FormatInput
            isDarkMode={isDarkMode}
          />

          {error && <span>{error}</span>}

        </>
      ) : (
        <>

          <span>Payment Success. Please wait...</span>
          <FontAwesomeIcon
            className="spinner"
            icon={faSpinner}
            size='2xl'
            spin
            style={{ marginTop: "1rem" }}
          />

        </>
      )}

    </TranscribeFormStyles>
  );
}
