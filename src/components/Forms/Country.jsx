import React, { useContext, useState } from "react";
import { CountryContext } from "../../contexts/CountryState";
import { TiArrowSortedDown } from "react-icons/ti";

const Country = ({ props }) => {
  const { countries } = useContext(CountryContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <input
        onClick={() => {
          props.setCountry("Select Your country");
          setIsOpen(!isOpen);
        }}
        type="text"
        className="px-3 py-2 mb-4 rounded-lg shadow-lg border border-transparent focus:border-black outline-none cursor-pointer"
        placeholder="Enter Country"
        value={props.country}
        name="country"
        id="country"
        readOnly
      />
      <ul
        onMouseEnter={() => setIsOpen(true)}
        className={`${
          isOpen ? "overflow-scroll  h-40" : "hidden"
        } w-[13rem] absolute bg-white mb-4 rounded-lg shadow-lg border border-transparent focus:border-black outline-none z-10`}
      >
        {countries.map((country, index) => (
          <li
            onClick={() => {
              setIsOpen(false);
              props.setCountry(country.name);
              props.handleInput({country:country.name})
            }}
            className="px-3 flex justify-start items-center h-10 w-full border hover:bg-gray-200 cursor-pointer"
            key={index}
            value={country.name}
          >
            {country.name}
          </li>
        ))}
      </ul>
      <span
        onClick={() => {
          props.setCountry("Select Your country");
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2.5 text-lg cursor-pointer"
      >
        <TiArrowSortedDown />
      </span>
    </div>
  );
};

export default Country;