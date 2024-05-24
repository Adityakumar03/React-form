import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FormContext } from "./contexts/FormState";

const App = () => {
  const { count } = useContext(FormContext);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (count == 10) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
  }, [count]);

  return (
    <div className="sm:h-screen p-4 relative bg-gray-300 w-screen flex justify-center items-center flex-col">
      <span
        className={`absolute ${
          isSuccess ? "top-0" : "-top-40"
        } p-3 text-white transition-all bg-green-400 rounded-b-xl border border-green-500`}
      >
        Form Submitted Successfully!
      </span>
      <Outlet />
    </div>
  );
};

export default App;