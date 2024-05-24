import React, { createContext, useState } from "react";

export const FormContext = createContext();
const FormState = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordVisibility = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    phoneNumber: "",
    country: "",
    city: "",
    panNumber: "",
    aadharNumber: "",
  });
  let name, value;
  const handleInput = (e) => {
    if (e.target != undefined) {
      name = e.target.name;
      value = e.target.value;
      setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    } else if(e.country!=undefined) {
      setUser((prevFormData) => ({ ...prevFormData, ["country"]: e.country }));
    }
     else if(e.city!=undefined) {
      setUser((prevFormData) => ({ ...prevFormData, ["city"]: e.city }));
    }
  };

  return (
    <FormContext.Provider
      value={{ handleInput, user, isVisible, handlePasswordVisibility,count,setCount }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormState;