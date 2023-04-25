import React, { createContext, useContext, useState } from 'react';

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface AppContextInterface {
  transcript: string;
  setTranscript(transcript: string): void;
  link: HTMLAnchorElement | null;
  setLink(link: HTMLAnchorElement | null): void;
  format: string;
  setFormat(format: string): void;
  priceInCents: number;
  setPriceInCents(priceInCents: number): void;
  file: File | null;
  setFile(file: File | null): void;
  succeeded: boolean;
  setSucceeded(succeeded: boolean): void;
  isDarkMode: boolean;
  setIsDarkMode(isDarkMode: boolean): void;
  error: string;
  setError(error: string): void;
  isLoading: boolean;
  setIsLoading(isLoading: boolean): void;
  paymentError: string | null;
  setPaymentError(paymentError: string | null): void;
  processing: boolean | null;
  setProcessing(processing: boolean | null): void;
  disabled: boolean;
  setDisabled(disabled: boolean): void;
  clientSecret: string;
  setClientSecret(clientSecret: string): void;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [transcript, setTranscript] = useState<string>("");
  const [link, setLink] = useState<HTMLAnchorElement | null>(null);
  const [format, setFormat] = useState<string>("text");
  const [priceInCents, setPriceInCents] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
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
        setIsDarkMode,
        error,
        setError,
        isLoading,
        setIsLoading,
        paymentError,
        setPaymentError,
        processing,
        setProcessing,
        disabled,
        setDisabled,
        clientSecret,
        setClientSecret,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
