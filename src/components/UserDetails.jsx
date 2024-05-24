import React, { useContext } from "react";
import { FormContext } from "../contexts/FormState";
import { Navigate } from "react-router-dom";

const UserDetails = () => {
  const { user,count } = useContext(FormContext);
  console.log(user);
  return (
    <div className="flex flex-col justify-center items-start gap-4 p-6 bg-white rounded-2xl shadow-xl w-2/4">
      <h1 className="self-center pb-2 border-b-2 border-black w-full text-center">
        Your Details
      </h1>
      <div className="flex flex-col justify-center items-start gap-3">
        <p className="flex justify-center items-center gap-2">
          Your Name:
          <span>{user.firstName + " " + user.lastName}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your User Name:
          <span>{user.userName}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your Email:
          <span>{user.email}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your Phone:
          <span>{user.phoneNumber}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your Address:
          <span>{user.city + ", " + user.country}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your PAN:
          <span>{user.panNumber}</span>
        </p>
        <p className="flex justify-center items-center gap-4">
          Your Aadhar:
          <span>{user.aadharNumber}</span>
        </p>
      </div>
      {
        count!=10 && <Navigate to="/"/>
      }
    </div>
  );
};

export default UserDetails;