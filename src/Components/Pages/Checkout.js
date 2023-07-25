import React, { Fragment, useState, useContext } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, shippingOptions, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const handleCheckout = (e) => {
    // e.preventDefault();
    // console.log(shippingOptions);
    // console.log("handle checkiout");
  };

  const calculateTotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    const productsTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const shippingPrice = shippingOptions ? shippingOptions.price : 0;
    return productsTotal + shippingPrice;
  };

  //   {
  //     "name" : "ukash",
  //     "email" : "muha.oq3@gmail.com",
  //     "address" : "kampala",
  //     "tel" : "075273154",
  //     "products" : [5,6]
  // }

  const handleFormSubmit = async (e) => {
    // console.log(cartItems);
    setLoading(true);
    e.preventDefault();
    const formData = {
      name: e.target.elements.firstname.value,
      email: e.target.elements.email.value,
      address: e.target.elements.address.value,
      tel: e.target.elements.phone.value,
      products: cartItems.map((item) => item.id),
    };

    const response = await fetch("http://127.0.0.1:8000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(response.status);
    if (response.status == 201) {
      clearCart(); // clear items in the cart
      navigate("/success");
    }

    setLoading(false);
  };

  return (
    <Fragment>
      {loading && ( // Display loading indicator only if loading is true
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50"></div>
      )}

      <h2 className="mt-28 text-4xl font-semibold flex justify-center">
        {" "}
        Checkout{" "}
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col md:flex-row gap-6 md:w-8/12 text-left p-4 mt-10 mx-auto justify-between">
          <div className="flex md:w-2/5 flex-col gap-2">
            <h2 className="text-2xl my-5"> Billings </h2>
            <div className="flex justify-between">
              <span className="flex w-2/4 flex-col gap-2">
                <label> First Name </label>
                <input
                  class="border w-full border-gray-300 p-1 outline-gray-300"
                  type="text"
                  name="firstname"
                  required
                />
              </span>
              <span className="flex w-2/4 ml-4 flex-col gap-2">
                <label> Last Name </label>
                <input
                  class="border w-full border-gray-300 p-1 outline-gray-300"
                  type="text"
                  name="lastname"
                  required
                />
              </span>
            </div>

            <span className="flex my-2 flex-col gap-2">
              <label> Comapny Name </label>
              <input
                class="border border-gray-300 p-1 outline-gray-300"
                type="text"
                name="company"
              />
            </span>

            <span className="flex my-2 flex-col gap-2">
              <label> Street Address </label>
              <input
                class="border border-gray-300 p-1 outline-gray-300"
                type="text"
                name="address"
                required
              />
            </span>

            <span className="flex my-2 flex-col gap-2">
              <label> Postal Code </label>
              <input
                class="border border-gray-300 p-1 outline-gray-300"
                type="text"
                name="postal"
                required
              />
            </span>

            <span className="flex my-2 flex-col gap-2">
              <label> Town / City </label>
              <input
                class="border border-gray-300 p-1 outline-gray-300"
                type="text"
                name="town"
                required
              />
            </span>

            <div className="flex flex-col md:flex-row justify-between">
              <span className="flex flex-col gap-2">
                <label> Email </label>
                <input
                  class="border border-gray-300 p-1 outline-gray-300"
                  type="email"
                  name="email"
                  required
                />
              </span>
              <span className="flex flex-col gap-2">
                <label> Phone </label>
                <input
                  class="border border-gray-300 p-1 outline-gray-300"
                  type="text"
                  name="phone"
                  required
                />
              </span>
            </div>
            <span className="flex my-2 flex-col gap-2">
              <label> Order Notes </label>
              <textarea
                className="resize-none p-2 border border-gray-400 outline-gray-900"
                rows="5"
              ></textarea>
            </span>
          </div>

          <div className="flex md:w-2/5 flex-col gap-2">
            <h2 className="text-2xl my-5 font-semibold"> Your Order </h2>
            <div className="flex p-4 text-sm  flex-col gap-2 border border-gray-300">
              <div className="flex text-gray-400 justify-between">
                <p> Product </p>
                <p> Quantity </p>
                <p> Total </p>
              </div>
              <hr></hr>

              {cartItems.map((item) => (
                <div className="flex  text-gray-400 text-base my-2 mt-5 justify-between">
                  <h3> {item.name} </h3>
                  <p> {item.quantity}x </p>
                  <label> ${item.price} </label>
                </div>
              ))}
              {/* <div className="flex font-semibold text-base my-2 mt-5 justify-between">
              <h3> Contrast Backpack </h3>
              <label> $4.99 </label>
            </div>
            <div className="flex font-semibold text-base my-2 mt-5 justify-between">
              <h3> Contrasting Design T-Shirt </h3>
              <label> $4.99 </label>
            </div>

            <div className="flex font-semibold text-base my-2 mt-5 justify-between">
              <h3> Cropped Denim Jumpsuit </h3>
              <label> $4.99 </label>
            </div> */}

              <div className="mt-6 flex justify-between text-gray-400">
                <p> Subtotal </p>
                <label>
                  <p>${calculateTotal().toFixed(2)}</p>{" "}
                </label>
              </div>

              <h3 className="font-bold my-2 mt-6 text-lg"> Shipping </h3>

              <div className="flex text-gray-400 justify-between">
                <p> {shippingOptions.type} </p>
                <label> ${shippingOptions.price} </label>
              </div>

              <h4 className="my-2 mt-4 font-bold text-lg"> Payment </h4>

              <label className="text-gray-500 py-2 text-sm">
                <input type="radio" name="shippingOption" value="local" />
                <span className="ml-1"> PayPal </span>
              </label>

              <label className="text-gray-500 py-2 text-sm">
                <input type="radio" name="shippingOption" value="local" />
                <span className="ml-1">Direct Bank Transfer</span>
              </label>

              <div className="flex mt-6 justify-between text-gray-300">
                <h4 className="font-bold text-lg text-black"> Total </h4>
                <label>
                  {" "}
                  <p>${calculateTotal().toFixed(2)}</p>{" "}
                </label>
              </div>
            </div>
            <button
              onClick={() => handleCheckout()}
              className="w-full bg-indigo-950 text-white font-medium text-lg p-6"
            >
              {loading ? (
                <div className="flex   justify-center items-center h-4">
                  <ClipLoader color="green" loading={true} size={35} />
                </div>
              ) : (
                <span> Proceed to Checkout </span>
              )}
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </Fragment>
  );
}

export default Checkout;
