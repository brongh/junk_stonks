// import React, { useReducer } from "react";
import jwt from "jwt-decode";

let token = localStorage.getItem("token") || "";

let userDetails = token ? jwt(token) : "";

// let refresh_token = localStorage.getItem("");

export const initialState = {
  userDetails: "" || userDetails,
  token: "" || token,
  // refresh_token: "" || refresh_token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,

        token: action.payload.access,
        userDetails: jwt(action.payload.access),
        // refresh: action.payload.data.refresh,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userDetails: "",
        token: "",
        // refresh_token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
