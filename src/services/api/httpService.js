import { toast } from "react-toastify";

const { default: Axios } = require("axios");

Axios.interceptors.response.use(
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

export default {
  get: Axios.get,
  post: Axios.post,
  put: Axios.put,
  delete: Axios.delete,
};
