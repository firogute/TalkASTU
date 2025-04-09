import React, { Fragment, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// Pages
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import RouteWrapper from "../components/RouteWrapper";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:7000/auth/is-verify", {
        method: "GET",
        headers: {
          token: token,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setIsAuthenticated(data === true);
      } else {
        console.error(data.message || "Authentication failed");
        setIsAuthenticated(false);
      }
    } catch (e) {
      console.error(e.message);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <ToastContainer />
      <Router>
        <RouteWrapper>
          <Routes>
            {/* Landing */}
            <Route
              path="/"
              element={
                !isAuthenticated ? <LandingPage /> : <Navigate to="/home" />
              }
            />
            {/* Login */}
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            {/* Register */}
            <Route
              path="/register"
              element={
                !isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Navigate to="/home" />
                )
              }
            />
            {/* Protected HomePage */}
            <Route
              path="/home"
              element={
                isAuthenticated ? (
                  <HomePage setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </RouteWrapper>
      </Router>
    </Fragment>
  );
}

export default App;
