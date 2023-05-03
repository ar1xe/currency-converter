import React, { useContext, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { InputAmount } from "./components/inputAmount";
import { CountrySelection } from "./components/countrySelection";
import { SwitchСurrency } from "./components/switchСurrency";
import { CurrencyContext } from "./context/CurrencyContext";
import { urlAPI } from "../src/api/constants";
import axios from "axios";

function App() {
  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, amount } =
    useContext(CurrencyContext);

  const [resultCurrency, setResultCurrency] = useState<number>(0);

  useEffect(() => {
    if (amount) {
      axios(urlAPI, {
        params: {
          apikey: process.env.REACT_APP_API_KEY,
          base_currency: fromCurrency,
          currencies: toCurrency,
        },
      })
        .then((response) => setResultCurrency(response.data.data[String(toCurrency)]))
        .catch((error) => console.log(error));
    }
  }, [amount, fromCurrency, toCurrency]);
  const containerStyles = {
    background: "#fcfcfc",
    textAlign: "center",
    borderRadius: 2,
    minHeight: "20rem",
    padding: "4rem 2rem",
    boxShadow: "0px 37px 54px 37px rgba(0,0,0,0.1)",
    position: "relative",
    marginTop: "17rem",
  };
  return (
    <Container maxWidth="md" sx={containerStyles}>
      <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
        Currency Converter
      </Typography>
      <Grid container spacing={3}>
        <InputAmount />
        <CountrySelection label="From" value={fromCurrency} setValue={setFromCurrency} />
        <SwitchСurrency />
        <CountrySelection label="To" value={toCurrency} setValue={setToCurrency} />
      </Grid>
      {amount ? (
        <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
          <Typography>{`${amount} ${fromCurrency} =`}</Typography>
          <Typography variant="h5" sx={{ marginTop: "5px", fontWeight: "bold" }}>
            {`${resultCurrency * +amount} ${toCurrency}`}
          </Typography>
        </Box>
      ) : null}
    </Container>
  );
}

export default App;
