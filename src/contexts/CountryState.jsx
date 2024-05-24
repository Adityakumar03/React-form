import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CountryContext = createContext();
const CountryState = ({ children }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json"
      )
      .then((response) => {
        // console.log(response.data);
        response.data != undefined && setCountries(response.data);
      })
      .catch((error) => {
        alert("Network error unable to fetch country list!");
        console.log(error);
      });
  }, []);

  return (
    <CountryContext.Provider value={{countries}}>{children}</CountryContext.Provider>
  );
};

export default CountryState;