import TranscribeForm from "./containers/Transcription/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./containers/Transcription/TranscriptField";
import PaymentForm from "./containers/Payment/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";
import SubmitButton from "./containers/Transcription/SubmitButton";

import { AppStyles } from "./App.styles";
import { useAppContext } from "./AppContext";

export default function App() {
  const { transcript, file, succeeded, isDarkMode } = useAppContext();

  return (
    <AppStyles isDarkMode={isDarkMode}>
      <LightDarkMode />
      <Header />
      {!transcript ? <TranscribeForm /> : <TranscriptField />}

      {/* uncomment to turn on payment */}
      {/* {file && !succeeded && <PaymentForm />} */}
    </AppStyles>
  );
}
