import { Fragment } from "react";

import Navbar from "./(components)/navbar/navbar.comp";
import HomePage from "./(components)/homepage/homepage.comp";

export default function Page() {
  return (
    <Fragment>
      <Navbar />
      <HomePage />
    </Fragment>
  );
}
