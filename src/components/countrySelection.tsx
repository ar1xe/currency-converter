import React, { FC, SyntheticEvent } from "react";
import { Grid, Autocomplete, TextField, Skeleton } from "@mui/material";
import { CountriesAPI } from "../api/countriesAPI";

type CountrySelectionPropsTypes = {
  label: string;
  value: string | null;
  setValue: (value: string | null) => void;
};

export const CountrySelection: FC<CountrySelectionPropsTypes> = ({
  label,
  value,
  setValue,
}) => {
  const { data, loaded } = CountriesAPI(process.env.REACT_APP_API_ENDPOINT as string);

  const filteredCountry = { ...data?.data };
  const dataCountries = Object.keys(filteredCountry);

  const onChangeHandler = (
    event: SyntheticEvent<Element, Event>,
    value: string | null
  ): void => {
    setValue(value);
  };

  return (
    <>
      {loaded ? (
        <Grid item xs={10} md={3}>
          <Skeleton variant="rounded" height={50} />
        </Grid>
      ) : (
        <Grid item xs={10} md={3}>
          <Autocomplete
            value={value}
            options={dataCountries}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={onChangeHandler}
          />
        </Grid>
      )}
    </>
  );
};
