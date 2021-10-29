import React from "react";
import Body from "./component/Body";

import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
