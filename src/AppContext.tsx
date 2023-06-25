import React, { createContext, useContext, useState, useEffect } from "react";

type userDataType = {
  fl: string;
  h: string;
  ip: string;
  ts: string;
  visit_scheme: string;
  uag: string;
  colo: string;
  sliver: string;
  http: string;
  loc: string;
  tls: string;
  sni: string;
  warp: string;
  gateway: string;
  rbi: string;
  kex: string;
};

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
  mode: "transcribe" | "translate";
  setMode(mode: "transcribe" | "translate"): void;
  userData: userDataType | null;
  setUserData(userData: userDataType | null): void;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [transcript, setTranscript] = useState<string>("");
  const [link, setLink] = useState<HTMLAnchorElement | null>(null);
  const [format, setFormat] = useState<string>("text");
  const [priceInCents, setPriceInCents] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isDarkMode");
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const [mode, setMode] = useState<"transcribe" | "translate">("transcribe");
  const [userData, setUserData] = useState<userDataType | null>(null);

  useEffect(() => {
    let newObj = {};
    fetch("https://www.cloudflare.com/cdn-cgi/trace").then((response) => {
      response
        .text()
        .then((text) => {
          text
            .trimEnd()
            .split("\n")
            .map((line) => {
              const [key, value] = line.split("=");
              newObj = { ...newObj, [key]: value };
            });
        })
        .then(() => {
          setUserData(newObj as userDataType);
        });
    });
  }, []);

  useEffect(() => {
    if (!userData) return;
    fetch("http://localhost:8080/tracking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }, [userData]);

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
        mode,
        setMode,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
