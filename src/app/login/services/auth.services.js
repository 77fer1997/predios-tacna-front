import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import {
  AlertError,
  AlertSuccess,
  HideLoading,
  ShowConfirm,
  ShowLoading,
} from "@/components/Alerts";

export const authLogin = async (user, password, type_user) => {
  try {
    ShowLoading();
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      user,
      password,
      type_user,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.msg);
  }
};
