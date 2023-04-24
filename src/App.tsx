import React, { useState } from "react";
import TranscribeForm from "./components/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./components/TranscriptField";
import { AppStyles } from "./App.styles";
import PaymentForm from "./components/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";
import { useWindowWidth } from './hooks/useWindowWidth';

export default function App() {
  const [transcript, setTranscipt] = useState<string>("");
  const [link, setLink] = useState<HTMLAnchorElement | null>(null);
  const [format, setFormat] = useState<string>("text");
  const [priceInCents, setPriceInCents] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const width = useWindowWidth();

  return (
    <AppStyles isDarkMode={isDarkMode}>
      <LightDarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Header
        width={width}
      />

      {!transcript ? (
        <TranscribeForm
          setTranscript={setTranscipt}
          setLink={setLink}
          setFormat={setFormat}
          priceInCents={priceInCents}
          setPriceInCents={setPriceInCents}
          file={file}
          setFile={setFile}
          succeeded={succeeded}
          isDarkMode={isDarkMode}
          width={width}
        />
      ) : (
        <TranscriptField
          transcript={transcript}
          link={link}
          format={format}
          isDarkMode={isDarkMode}
          width={width}
        />
      )}

      {file && !succeeded && (
        <PaymentForm
          file={file}
          priceInCents={priceInCents}
          succeeded={succeeded}
          setSucceeded={setSucceeded}
          isDarkMode={isDarkMode}
          width={width}
        />
      )}
    </AppStyles>
  );
}
