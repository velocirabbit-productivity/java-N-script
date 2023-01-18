import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuthContext";

const Protected = ({ children }) => {
  const { loggedInUser } = useAuth();
  if (!loggedInUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default Protected;