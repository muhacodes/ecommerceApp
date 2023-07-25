import React, { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import Footer from "../Footer";
import { CartContext } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const [productNo, setProductNo] = useState(0);

  const [selectedOption, setSelectedOption] = useState([]);
  const { cartItems, removeItemFromCart, ShippingOption } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);

  const shippingOptions = [
    { type: "Free Shipping", price: 0 },
    { type: "Local Shipping", price: 2.99 },
    { type: "Express Shipping", price: 7.99 },
  ];

  const handleOptionChange = (item) => {
    setSelectedOption(item);
  };

  const calculateTotal = () => {};

  const submitForm = () => {
    ShippingOption(selectedOption);
    console.log(selectedOption);
    navigate("/checkout");
  };

  return (
    <Fragment>
      {loading && ( // Display loading indicator only if loading is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"></div>
      )}
      <div className="flex flex-col gap-6 justify-center md:m-20">
        <h2 className="text-2xl md:text-5xl font-sans font-bold">
          {" "}
          Shopping Cart!{" "}
        </h2>
        <p> Home / Shop </p>
      </div>

      <div className="overflow-x-auto mt-5 py-6">
        <table className="table m-auto w-[150%]  sm:w-full overflow-scroll text-left md:w-[65%]">
          <tbody>
            <tr className="">
              <th class="w-2/5">Name</th>
              <th> Price </th>
              <th> Quantity </th>
              <th> Total </th>
              <th> Action </th>
            </tr>
            {cartItems.map((item) => (
              <tr className="">
                <td className="flex W-[250px] items-center gap-2 text-sm">
                  <img
                    className="h-16 w-16"
                    height="64"
                    width="64"
                    src={item.image}
                  />
                  <p> {item.name} </p>
                </td>
                <td>
                  <label> {item.price} </label>
                </td>
                <td>
                  <label> {item.quantity} 0 </label>
                </td>
                {/* <td>
            <div className="flex flex-row gap-6 border w-fit border-gray-400 px-2 py-2">
              <button
                onClick={() => {
                  setProductNo(productNo < 10 ? productNo + 1 : productNo);
                }}
              >
                <FontAwesomeIcon size="sm" icon={faPlus} />
              </button>
              <label>{productNo}</label>
              <button
                onClick={() => {
                  setProductNo(productNo > 1 ? productNo - 1 : productNo);
                }}
              >
                <FontAwesomeIcon size="xsm" icon={faMinus} />
              </button>
            </div>
          </td> */}

                <td> ${item.quantity * item.price} </td>
                <td>
                  <FontAwesomeIcon
                    onClick={() => {
                      setLoading(true);
                      removeItemFromCart(item);
                      setLoading(false);
                    }}
                    icon={faTimes}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start my-20 sm:w-[65%] w-[95%] h-[600px] m-auto">
        <button className="border-[2px] hover:bg-blue-950 hover:text-white hover:duration-700 px-16 py-4">
          {" "}
          Continue Shopping!{" "}
        </button>

        <div className="border-[1px] w-[350px] h-fit border-gray-200">
          <div className="flex text-left p-4 flex-col ">
            <h3 className="font-semibold text-lg my-4"> Shipping </h3>

            <ul className="flex flex-col gap-2">
              {shippingOptions.map((item) => (
                <li className="flex justify-between">
                  <label className="text-gray-500 text-sm">
                    <input
                      type="radio"
                      name={item.type}
                      value={item.type}
                      // checked={selectedOption === "free"}
                      checked={selectedOption.type === item.type}
                      onChange={() => {
                        handleOptionChange(item);
                      }}
                    />
                    <span className="ml-1"> {item.type} </span>
                  </label>
                  <span>${item.price}</span>
                </li>
              ))}
              {/* <li className="flex justify-between">
                <label className="text-gray-500 text-sm">
                  <input
                    type="radio"
                    name="shippingOption"
                    value="express"
                    checked={selectedOption === "express"}
                    onChange={handleOptionChange}
                  />
                  <span className="ml-1"> Express Shipping </span>
                </label>
                <span>$7.99</span>
              </li> */}
            </ul>
            <div className="flex my-4 text-sm justify-between">
              <h3> subtotal </h3>
              <p> $485.99 </p>
            </div>

            <hr></hr>

            <input
              className="my-4 border border-gray-300 p-2"
              type="text"
              placeholder="Postal Code"
            />

            <button className="border-[2px] bg-gray-300 hover:bg-white hover:text-black hover:duration-700 px-16 py-4">
              Calculate Shipping!
            </button>
          </div>
          <button
            onClick={submitForm}
            className="border  w-full pl-4 pr-4 border-green-50 bg-blue-950 text-white p-2 mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Cart;
