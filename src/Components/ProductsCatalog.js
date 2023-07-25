import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductsCatalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products");
      // console.log(await response.json());
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data["Product"]);
      setProducts(data.products);
      // setProducts(data.Product);
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className="py-10">
        <ul className="flex gap-16 justify-center font-mono sm:text-sm lg:text-2xl text-gray-400">
          <li className="hover:underline hover:cursor-pointer hover:text-black">
            <a> Best Sellers </a>
          </li>
          <li className="hover:underline hover:cursor-pointer hover:text-black">
            <a> New Arrivals </a>
          </li>
          <li className="hover:underline hover:cursor-pointer hover:text-black">
            <a> Most Popular </a>
          </li>
        </ul>

        <div className="px-10 sm:px-6 lg:px-8">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {products?.map((product) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/products/${product.id}`}
                key={product.id}
              >
                <ProductItem product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductsCatalog;
