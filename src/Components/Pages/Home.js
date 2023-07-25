import React, { Component, Fragment } from "react";
import Banner from "../Banner";
import Header from "../Header";
import ProductsCatalog from "../ProductsCatalog";
import Footer from "../Footer";


export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <ProductsCatalog />

        <Footer />
      </Fragment>
    );
  }
}

export default Home;
