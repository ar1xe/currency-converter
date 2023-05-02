import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import WifiProtectedSetupIcon from "@mui/icons-material/WifiProtectedSetup";
import { CurrencyContext } from "../context/CurrencyContext";

export const SwitchСurrency = () => {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency } =
    useContext(CurrencyContext);

  const onClickHandlerSwitchCountry = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Grid item xs={10} md="auto">
      <Button onClick={onClickHandlerSwitchCountry} sx={{ borderRadius: 10, height: "100%" }}>
        <WifiProtectedSetupIcon sx={{ fontSize: 35 }} />
      </Button>
    </Grid>
  );
};
