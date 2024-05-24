import React, { useContext } from "react";
import { CountryContext } from "../../contexts/CountryState";

const PhoneNumber = ({handleInput}) => {
  const { countries } = useContext(CountryContext);
  return (
    <>
      <input
        onChange={handleInput}
        className="px-3 py-2 mb-4 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
        list="phoneNumbers"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Enter phone no."
      />
      <datalist id="phoneNumbers">
        {countries.map((country, index) => (
          <option key={index} value={country.phone_code}>
            +{country.phone_code.split("and")[0].replace("+", "")}
          </option>
        ))}
      </datalist>
    </>
  );
};

export default PhoneNumber;