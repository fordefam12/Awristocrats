import { Link } from "react-router-dom";

import "./index.scss";
// import { useEffect, useState } from "react";
// import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

// 'f', 'u', 'l', 'l','s', 't', 'a', 'c', 'k',

const Home = () => {



  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          </h1>
          <h2>FullStack developer / </h2>
          <Link to="/contact" className="flat-button">
            Contact me
          </Link>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
