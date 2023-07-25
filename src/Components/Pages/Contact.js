import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faGoogle,
  faTiktok,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <Fragment>
      <div className="md:h-80 h-44  bg-slate-200 w-full flex-col justify-center p-20">
        <h1 className="text-gray-900 text-3xl font-bold mb-6"> Contact </h1>
        <div className="flex gap-2 justify-center text-sm">
          <h3 className="text-gray-400"> Home </h3> - <h3> Contact </h3>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:w-8/12 text-left p-4 mt-10 mx-auto justify-between">
        <div className="flex md:w-4/6 flex-col gap-2">
          <div className="flex justify-between">
            <span className="flex w-2/4 flex-col gap-2">
              <label> Name </label>
              <input
                class="border w-full border-gray-300 p-1 outline-gray-300"
                type="text"
                name="fname"
              />
            </span>
            <span className="flex w-2/4 ml-4 flex-col gap-2">
              <label> Email </label>
              <input
                class="border w-full border-gray-300 p-1  outline-gray-300"
                type="text"
                name="fname"
              />
            </span>
          </div>

          <span className="flex  my-2 flex-col gap-2">
            <label> Message </label>
            <textarea
              className="resize-none p-2 border border-gray-400 outline-gray-900"
              rows="10"
            ></textarea>
          </span>

          <button className="w-full bg-indigo-950 text-white font-medium text-lg p-3">
            Send Message
          </button>
        </div>

        <div className="flex md:w-2/6 flex-col gap-2">
          <div className="flex p-4 text-sm  flex-col gap-2 border border-gray-300">
            <div className="flex gap-6 text-gray-400 justify-evenly">
              <FontAwesomeIcon
                className="hover:bg-orange-900 p-1 rounded"
                size="2x"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className="hover:bg-orange-900 p-1 rounded"
                size="2x"
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className="hover:bg-orange-900 p-1 rounded"
                size="2x"
                icon={faGoogle}
              />
              <FontAwesomeIcon
                className="hover:bg-orange-900 p-1 rounded"
                size="2x"
                icon={faTiktok}
              />
              <FontAwesomeIcon
                className="hover:bg-orange-900 p-1 rounded"
                size="2x"
                icon={faPinterest}
              />
            </div>
            <h2 className="text-2xl"> Our Office </h2>
            <p className="text-gray-500 font-thin text-sm">
              {" "}
              15 St Margarets Lane New York, NY 10033{" "}
            </p>

            <h3 className="mt-6 font-bold text-xl"> Get in Touch </h3>

            <span className="mt-3">
              <h2> Phone Number </h2>
              <p> +631-679-6357 </p>
            </span>

            <span className="mt-3">
              <h3> Email: </h3>
              <p> muha.oq3@gmail.com </p>
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default Contact;
