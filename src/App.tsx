import TranscribeForm from "./components/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./components/TranscriptField";
import { AppStyles } from "./App.styles";
import PaymentForm from "./components/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";
import { useWindowWidth } from './hooks/useWindowWidth';
import { AppContextProvider } from './AppContext';
import { useAppContext } from "./AppContext";

export default function App() {
  const {
    transcript,
    setTranscript,
    link,
    setLink,
    format,
    setFormat,
    priceInCents,
    setPriceInCents,
    file,
    setFile,
    succeeded,
    setSucceeded,
    isDarkMode,
    error,
    setError,
  } = useAppContext();

  const width = useWindowWidth();

  return (
    <AppContextProvider>
      <AppStyles isDarkMode={isDarkMode}>
        <LightDarkMode />

        <Header width={width} />

        {!transcript ? (
          <TranscribeForm width={width} />
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
    </AppContextProvider>
  );
}
