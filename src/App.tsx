import TranscribeForm from "./components/TranscribeForm";
import Header from "./components/Header";
import TranscriptField from "./components/TranscriptField";
import { AppStyles } from "./App.styles";
import PaymentForm from "./components/PaymentForm";
import LightDarkMode from "./components/LightDarkMode";
import { useAppContext } from "./AppContext";

export default function App() {
  const { transcript, file, succeeded, isDarkMode } = useAppContext();

  return (
    <AppStyles isDarkMode={isDarkMode}>

      <LightDarkMode />
      <Header />

      {!transcript ? (
        <TranscribeForm />
      ) : (
        <TranscriptField />
      )}

      {file && !succeeded && (
        <PaymentForm />
      )}

    </AppStyles>
  );
}
