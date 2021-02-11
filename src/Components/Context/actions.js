import { axiosInstance } from "../api/axiosCalls";
import jwt from "jwt-decode";

const URL = "token/";

export const loginUser = async (dispatch, loginPayload) => {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await axiosInstance.post(`${URL}`, loginPayload);
    // .then((response) => console.table(response.data1));
    let data1 = await response;
    // const data1 = jwt(response.data.access);
    // console.log(data1);

    if (data1.data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data1.data });
      const userInfo = jwt(data1.data.access);
      localStorage.setItem("currentUser", userInfo);
      localStorage.setItem("token", data1.data.access);
      // localStorage.setItem("refresh_token", data1.data.refresh);
      return data1.data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data1.errors });
    return;
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_ERROR", error: error.response.data.detail });
  }
};

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
