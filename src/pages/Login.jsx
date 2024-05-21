/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginHandler } from "../api/user-api";

const Login = ({ toast, setUser }) => {
  const [loader, setLoader] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(setLoader, setUser, toast, userName, password);
  };

  return (
    <>
      <section className='w-full h-screen bg-[url("http://dev.s9trucks.com/hero-bg.0a3899048698eac4.png")] bg-cover bg-center bg-no-repeat flex justify-center items-center '>
        <form
          onSubmit={handleSubmit}
          className="w-92 p-4 flex  flex-col  gap-4 justify-center items-center bg-white rounded-md"
        >
          <Input
            value={userName}
            onChangeHandler={(e) => setUserName(e.target.value)}
            text={"text"}
            nametext={"UserName *"}
          />
          <Input
            value={password}
            text={"password"}
            nametext={"Pasword *"}
            onChangeHandler={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center pr-44">
            <Button text={"LOGIN"} type={"submit"} isloading={loader} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
