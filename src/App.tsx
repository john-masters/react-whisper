import React, { useState } from "react";
import TranscribeForm from "./components/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./components/TranscriptField";
import { AppStyles } from "./App.styles";
import PaymentForm from "./components/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";

export default function App() {
  const [transcript, setTranscipt] = useState<string>("");
  const [link, setLink] = useState<HTMLAnchorElement | null>(null);
  const [format, setFormat] = useState<string>("text");
  const [priceInCents, setPriceInCents] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [paymentSucceeded, setPaymentSucceeded] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handlePaymentSuccess = (succeeded: boolean) => {
    setPaymentSucceeded(succeeded);
  };

  return (
    <AppStyles isDarkMode={isDarkMode}>
      <LightDarkMode
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <Header />

      {!transcript ? (
        <TranscribeForm
          isDarkMode={isDarkMode}
          setTranscript={setTranscipt}
          setLink={setLink}
          setFormat={setFormat}
          priceInCents={priceInCents}
          setPriceInCents={setPriceInCents}
          file={file}
          setFile={setFile}
          paymentSucceeded={paymentSucceeded}
        />
      ) : (
        <TranscriptField
          transcript={transcript}
          link={link}
          format={format}
        />
      )}

      {file && !paymentSucceeded && (
        <PaymentForm
          file={file}
          priceInCents={priceInCents}
          onPaymentSuccess={handlePaymentSuccess}
          isDarkMode={isDarkMode}
        />
      )}
    </AppStyles>
  );
}
