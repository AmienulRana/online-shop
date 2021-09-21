import { createContext } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Authorized = (AccessToken) => {
  // const aToken = localStorage.getItem("aToken");
  // if (AccessToken !== aToken) {
  // return <Redirect to="/login" />;
  // }
  return AccessToken;
};
export default Authorized;
