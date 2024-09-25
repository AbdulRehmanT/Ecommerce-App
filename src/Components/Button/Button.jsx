import React from "react";

const Button = ({buttonName}) => {
  return (
    <button
      className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {buttonName}
    </button>
  );
};

export default Button;
