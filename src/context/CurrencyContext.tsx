import React, { createContext, FC, useState } from "react";

export type CurrencyContextPropsTypes = {
  children: any;
};

export type ValuesContectPropsTypes = {
  fromCurrency: string | null;
  setFromCurrency: (fromCurrency: string | null) => void;
  toCurrency: string | null;
  setToCurrency: (toCurrency: string | null) => void;
  amount: string;
  setAmount: (amount: string) => void;
};

export const CurrencyContext = createContext({} as ValuesContectPropsTypes);

export const CurrencyProvider: FC<CurrencyContextPropsTypes> = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState<string | null>("USD");
  const [toCurrency, setToCurrency] = useState<string | null>("RUB");
  const [amount, setAmount] = useState<string>("");

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
  };
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
