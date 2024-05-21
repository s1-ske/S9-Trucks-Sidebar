/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import toast, { Toaster } from "react-hot-toast";
import SideBar from "./components/SideBar";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ auth: localStorage.getItem("auth") });
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Toaster />
      </div>
      {user?.auth ? <SideBar /> : null}
      <Routes>
        <Route
          path="/"
          element={
            user?.auth ? (
              <Navigate to="/home" />
            ) : (
              <Login toast={toast} setUser={setUser} />
            )
          }
        />
        <Route
          path="/home"
          element={user?.auth ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/trucks"
          element={user?.auth ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/drivers"
          element={user?.auth ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/loads"
          element={user?.auth ? <Home /> : <Navigate to="/" />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
