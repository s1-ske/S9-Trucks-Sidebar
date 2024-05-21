/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Input = ({ text, nametext, value, onChangeHandler }) => {
  return (
    <>
      <input
        onChange={onChangeHandler}
        type={text}
        value={value}
        placeholder={nametext}
        className="input"
        required
      />
    </>
  );
};

export default Input;
