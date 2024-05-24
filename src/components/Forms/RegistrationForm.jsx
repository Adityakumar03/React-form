import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../../contexts/FormState";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Country from "./Country";
import PhoneNumber from "./PhoneNumber";
import Cities from "./Cities";
import { Link, Navigate } from "react-router-dom";

const RegistrationForm = () => {
  const [country, setCountry] = useState("Select Your country");
  const [city, setCity] = useState("Select Your city");
  const {
    handleInput,
    user,
    isVisible,
    handlePasswordVisibility,
    count,
    setCount,
  } = useContext(FormContext);
  const [err, setErr] = useState({});
  const dataValidation = () => {
    setErr({
      firstName: !user.firstName
        ? "First name is required"
        : /^[a-zA-Z]+$/.test(user.firstName)
        ? undefined
        : "First name must contain only letters",

      lastName: !user.lastName
        ? "Last name is required"
        : /^[a-zA-Z]+$/.test(user.lastName)
        ? undefined
        : "Last name must contain only letters",
      email: !user.email
        ? "Email is required"
        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)
        ? undefined
        : "Enter a valid email",

      userName: !user.userName
        ? "User name is required"
        : /^[\w&.\-]+$/.test(user.userName)
        ? undefined
        : "Only letters and numbers allowed",
      password: !user.password
        ? "Password is required"
        : user.password.length >= 8
        ? undefined
        : "Password must be geater than 8",
      phoneNumber: !user.phoneNumber ? "Phone is required" : undefined,
      country: !user.country ? "Country is required" : undefined,
      city: !user.city ? "City is required" : undefined,
      panNumber: !user.panNumber
        ? "Pan is required"
        : /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(user.panNumber)
        ? undefined
        : "Please enter your valid PAN",
      aadharNumber: !user.aadharNumber
        ? "Addhar is required"
        : /^\d{12}$/.test(user.aadharNumber)
        ? undefined
        : "Enter a valid adhar",
    });
  };
  useEffect(() => {
    let temp = 0;
    for (const key in err) {
      if (err[key] === undefined) {
        console.log(temp++);
      } else {
        setCount(0);
      }
    }
    setTimeout(() => {
      setCount(temp);
    }, 2000);
  }, [err]);

  return (
    <div className="bg-slate-100 shadow-lg rounded-xl flex justify-center items-center flex-col p-6">
      <h1 className="text-2xl self-start">React Form</h1>
      <form className="flex flex-col p-4 gap-4 text-sm" autoComplete="off">
        <div className="flex justify-center flex-col sm:flex-row items-center sm:gap-8">
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              required
              onChange={handleInput}
            />
            {err.firstName != undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.firstName}
              </p>
            )}
          </div>
          <div className="relative flex flex-col justify-center items-start ">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="lastName"
            >
              Last name
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              required
              onChange={handleInput}
            />
            {err.lastName !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.lastName}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row items-center sm:gap-8">
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter Username"
              required
              onChange={handleInput}
            />
            {err.userName !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.userName}
              </p>
            )}
          </div>
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="px-3 lowercase mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email id"
              required
              onChange={handleInput}
            />
            {err.email !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.email}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row items-center sm:gap-8">
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type={isVisible ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              onChange={handleInput}
            />
            <button
              className="absolute right-2 bottom-7"
              onClick={handlePasswordVisibility}
            >
              {isVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
            {err.password !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.password}
              </p>
            )}
          </div>
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <PhoneNumber handleInput={handleInput} />
            {err.phoneNumber !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.phoneNumber}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row items-center sm:gap-8">
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="countries"
            >
              Country
            </label>
            <Country props={{ handleInput, country, setCountry }} />
            {err.country !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.country}
              </p>
            )}
          </div>
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="cities"
            >
              City
            </label>
            <Cities props={{ handleInput, country, city, setCity }} />
            {err.city !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.city}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center  flex-col sm:flex-row items-center sm:gap-8">
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="panNumber"
            >
              PAN Number
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="text"
              name="panNumber"
              id="panNumber"
              placeholder="Enter PAN"
              required
              onChange={handleInput}
            />
            {err.panNumber !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.panNumber}
              </p>
            )}
          </div>
          <div className="relative flex flex-col justify-center items-start">
            <label
              className="w-full relative flex justify-start items-center gap-1 ml-1"
              htmlFor="aadharNumber"
            >
              Aadhar Number
            </label>
            <input
              className="px-3 mb-4 py-2 rounded-lg shadow-lg border border-transparent focus:border-black outline-none"
              type="tel"
              name="aadharNumber"
              id="aadharNumber"
              placeholder="Enter Aadhar no."
              required
              onChange={handleInput}
            />
            {err.aadharNumber !== undefined && (
              <p className="text-[10px] ml-2 absolute -bottom-1 text-red-500 font-semibold">
                *{err.aadharNumber}
              </p>
            )}
          </div>
        </div>
      </form>
      <Link
        to="/home"
        className="px-6 py-2 bg-green-400 rounded-lg text-white shadow-lg"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dataValidation(user);
        }}
      >
        Submit
      </Link>
      {count == 10 && <Navigate to="/home" />}
    </div>
  );
};

export default RegistrationForm;