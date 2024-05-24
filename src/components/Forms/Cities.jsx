import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../contexts/CountryState";
import { TiArrowSortedDown } from "react-icons/ti";

const Cities = ({ props }) => {
  const { countries } = useContext(CountryContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    props.setCity("Select Your city");
  }, [props.country]);

  return (
    <div className="relative">
      <input
        onClick={() => {
          props.setCity("Select Your city");
          setIsOpen(!isOpen);
        }}
        className="px-3 py-2 mb-4 rounded-lg shadow-lg border border-transparent focus:border-black outline-none cursor-pointer"
        type="text"
        name="city"
        id="city"
        value={props.city}
        placeholder="Enter City"
        disabled={props.country === ("" || "Select Your country")}
        readOnly
      />
      <ul
        onMouseEnter={() => setIsOpen(true)}
        className={`${
          isOpen ? "overflow-scroll  h-40" : "hidden"
        } w-[13rem] absolute bg-white mb-4 rounded-lg shadow-lg border border-transparent focus:border-black outline-none z-10`}
      >
        {countries.map(
          (country) =>
            country.name === props.country &&
            country.states.map((state) =>
              state.cities.map((city, index) => (
                <li
                  onClick={() => {
                    setIsOpen(false);
                    props.setCity(city.name);
                    props.handleInput({ city: city.name });
                  }}
                  className="px-3 flex justify-start items-center h-10 w-full border hover:bg-gray-200 cursor-pointer"
                  key={index}
                  value={state.name}
                >
                  {city.name}
                </li>
              ))
            )
        )}
      </ul>
      <span
        onClick={() => {
          props.setCity("Select Your city");
          setIsOpen(!isOpen);
        }}
        className="absolute right-2 top-2.5 text-lg cursor-pointer"
      >
        <TiArrowSortedDown />
      </span>
    </div>
  );
};

export default Cities;