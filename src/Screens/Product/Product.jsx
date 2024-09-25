import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";

const Product = () => {
  const [pro, setPro] = useState([]);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPro(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-8 md:py-12 px-4 2xl:px-0 mx-auto max-w-screen-xl">
      <h1>All Products</h1>
      <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        {pro.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
