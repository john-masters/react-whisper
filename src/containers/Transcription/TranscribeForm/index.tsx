import FileInput from "../FileInput";
import FormatInput from "../FormatInput";
import LanguageInput from "../LanguageInput";
import ModeToggle from "../ModeToggle";
import ModeDescription from "../ModeDescription";

import { useAppContext } from "../../../AppContext";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

import { useEffect, useRef } from "react";
import { TranscribeFormStyles } from "./TranscribeForm.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../SubmitButton";

export default function TranscribeForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const width = useWindowWidth();

  const {
    setTranscript,
    setLink,
    setFormat,
    succeeded,
    error,
    isLoading,
    setIsLoading,
    setMode,
    mode,
  } = useAppContext();

  useEffect(() => {
    if (succeeded && formRef.current) {
      formRef.current?.requestSubmit();
    }
  }, [succeeded]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    const file = e.target[2].files[0];
    const format = e.target[3].value;
    setFormat(format);

    data.append("mode", mode);
    data.append("file", file);
    data.append("format", format);

    if (mode === "transcribe") {
      const language = e.target[4].value;
      data.append("language", language);
    }

    try {
      const res = await fetch(
        "https://express-whisper-production.up.railway.app/transcribe/",
        {
          method: "POST",
          body: data,
        }
      );

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

  const handleChange = (e: any) => {
    if (e.target.type === "radio") {
      setMode(e.target.value);
    }
  };

  return (
    <TranscribeFormStyles
      ref={formRef}
      onSubmit={handleSubmit}
      width={width}
      onChange={handleChange}
    >
      {!isLoading ? (
        <>
          <ModeToggle />
          <ModeDescription />
          <FileInput />
          <FormatInput />
          {mode === "transcribe" && <LanguageInput />}
          {error && <span>{error}</span>}

          {/* comment out submit button to turn on payment */}
          <SubmitButton />
        </>
      ) : (
        <>
          <span>Please wait...</span>
          <FontAwesomeIcon icon={faSpinner} size="2xl" spin />
        </>
      )}
    </TranscribeFormStyles>
  );
}
