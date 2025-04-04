// src/components/RouteWrapper.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";

const RouteWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timeout);
  }, [location]);

  return isLoading ? <Loader /> : children;
};

export default RouteWrapper;
