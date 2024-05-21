/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Loader from "./Loader";

const Button = ({ text, Fletch, isloading, type }) => {
  return (
    <>
      <button className="button" type={type} onClick={Fletch}>
        {isloading ? <Loader /> : text}
      </button>
    </>
  );
};

export default Button;
