import { SET_USER, LOGOUT } from "../constants";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
