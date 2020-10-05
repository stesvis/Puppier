import { toast } from "react-toastify";

const axios = require("axios");

axios.interceptors.response.use(
  // SUCCESS
  (response) => {
    // console.log("response", response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  // FAIL
  (error) => {
    console.log("error", error.response);
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      toast.error(error.response.data.data.message);
    }

    return Promise.reject(error);
  }
);

function setToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};
