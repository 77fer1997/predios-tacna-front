"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import Cookies from "js-cookie";
import { jwtVerify } from "jose";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const jwt = Cookies.get("admin");
  const validateUser = async () => {
    if (Cookies.get("admin")) {
      const jwt = Cookies.get("admin");
      const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode("secret")
      );
      setUser(payload);
    }
    console.log("no hay una cookie");
  };
  const logOut = () => {
    Cookies.remove("admin");
    setUser(null);
  };
  useEffect(() => {
    validateUser();
    console.log(jwt);
  }, [jwt]);
  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
