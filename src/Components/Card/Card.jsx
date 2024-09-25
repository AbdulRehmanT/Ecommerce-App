import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const Card = ({ item }) => {
  const navigator = useNavigate()

  const goToPage = () => {
    navigator("/singleProduct");
  };
  return (
    <div className="rounded border border-gray-200 shadow-sm">
      <div className="p-4 h-56 w-full">
        <a href="#">
          <img className="mx-auto h-full" src={item.image} alt={item.title} />
        </a>
      </div>

      <div className="px-4 py-4">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="me-2 rounded bg-blue-100 px-2.5 py-1.5 text-xs text-center font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            {item.category}
          </span>
        </div>
        <a
          href="#"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
        >
          {item.title}
        </a>
        <p className="text-2xl font-extrabold leading-tight text-gray-900">
          ${item.price.toFixed(0)}
        </p>
      </div>
      <div className="relative p-4 flex items-center justify-between gap-4 w-full">
        <Button className="w-1/2" buttonName="View Product" onClick={goToPage} />
      </div>
    </div>
  );
};

export default Card;
