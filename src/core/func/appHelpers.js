import axios from "axios";
const appHelpers = {};

// LCS is shorthand for local storage

appHelpers.saveToLCS = (name, value) => {
  return localStorage.setItem(name, value);
};

appHelpers.getFromLCS = (name) => {
  const res = localStorage.getItem(name);
  return res;
};

appHelpers.login = async (emailAddress, password) => {
  const data = { emailAddress, password };
  const options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  const res = await axios.post(
    "http://localhost:8080/auth/login",
    data,
    options
  );
  return res;
};

export default appHelpers
