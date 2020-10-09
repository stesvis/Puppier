import React, { useEffect } from "react";

import { Routes } from "../../../services/api/routes";
import authApiService from "../../../services/api/authApiService";
import logService from "../../../services/logService";
import { toast } from "react-toastify";

export default function LogOut() {
  const logOut = async () => {
    console.log("logging out...");

    try {
      await authApiService.logOut();
      window.location = Routes.home;
    } catch (ex) {
      if (ex.response) {
        toast.error(logService.extractErrorMessage(ex));
      }
    }
  };

  useEffect(() => {
    logOut();
  }, []);

  return null;
}
