import axios from "axios";
import { LOGIN_API } from "../constants/app-constants";

export const loginHandler = async (
  setLoader,
  setUser,
  toast,
  userName,
  password
) => {
  try {
    setLoader(true);
    const { data } = await axios.post(LOGIN_API, {
      username: userName,
      password,
    });
    localStorage.setItem("auth", data?.auth);
    toast.success("Logged in successfully");
    setUser(data);
  } catch (error) {
    console.log(error);
    const message =
      error?.response?.data?.message == "Internal server error"
        ? "Something went wrong"
        : error?.response?.data?.message;

    toast.error(message);
  } finally {
    setLoader(false);
  }
};
