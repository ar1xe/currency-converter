import React, { useContext } from "react";
import { Grid, InputAdornment, TextField } from "@mui/material";
import { CurrencyContext } from "../context/CurrencyContext";

export const InputAmount = () => {
  const { amount, setAmount } = useContext(CurrencyContext);

  const onChangeHandlerAmount = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAmount(event.currentTarget.value);
  };

  return (
    <Grid item xs={10} md>
      <TextField
        value={amount}
        onChange={onChangeHandlerAmount}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};
