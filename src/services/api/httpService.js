import localStorageService from "../localStorageService";
import logService from "../logService";
import { toast } from "react-toastify";

const axios = require("axios");

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorageService.getToken()}`;
  return config;
});

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
      toast.error(logService.extractErrorMessage(error));
    }

    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
