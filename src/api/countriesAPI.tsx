import React from "react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

type CountryPropsType = {
  data: DataPropsType;
};

type DataPropsType = {
  [key: string]: number;
};

export const CountriesAPI = (url: string) => {
  const [data, setData] = useState<CountryPropsType>();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true);
        const response = await axios.get<CountryPropsType>(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoaded(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loaded };
};
