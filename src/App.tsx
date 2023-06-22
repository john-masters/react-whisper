import TranscribeForm from "./containers/Transcription/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./containers/Transcription/TranscriptField";
import { AppStyles } from "./App.styles";
import PaymentForm from "./containers/Payment/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";
import { useAppContext } from "./AppContext";

export default function App() {
  const { transcript, file, succeeded, isDarkMode } = useAppContext();

  return (
    <AppStyles isDarkMode={isDarkMode}>
      <LightDarkMode />
      <Header />
      {!transcript ? <TranscribeForm /> : <TranscriptField />}
      {file && !succeeded && <PaymentForm />}
    </AppStyles>
  );
}
