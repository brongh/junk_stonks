import axios from "axios";

const base_url = "https://junk-stonks.herokuapp.com/api/";
// "http://localhost:8000/api/";

export const getUsersAxios = () => {
  axios.get(`${base_url}api/users/`).then((response) => {
    console.log(response);
    // return response.data;
  });
};

export const signUpAxios = (data) => {
  // axios.post("/api/users/", data).then((response) => console.log(response));
  axios
    .post(`${base_url}users/`, data)
    .then((response) =>
      alert(`Account registered under email: ${response.data.email}`)
    )
    .catch((error) => console.log(error));
};

export const investMoney = (data) => {
  axiosInstance
    .post("transactions/", data)
    .then((response) => console.log(response));
};

export const portfolioTrack = async (id) => {
  const res = await axiosInstance
    .get(`user_trans/${id}/`)
    .then((response) => console.log(response));
  return res;
};

export const axiosInstance = axios.create({
  baseURL: base_url,
  timeout: 5000,
  headers: {
    Authorization: "JWT" + localStorage.getItem("token"),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
