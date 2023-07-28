import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const { BASE_URL } = require("@/constants/Services.constants");
const { default: axios } = require("axios");

const URLUSER = `${BASE_URL}/administrador`;
export const getUsersService = async () => {
  try {
    const res = await axios.get(URLUSER);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createUserService = async ({
  name,
  lastnames,
  email,
  user,
  password,
}) => {
  try {
    ShowLoading();
    const res = await axios.post(URLUSER, {
      name,
      lastnames,
      email,
      user,
      password,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
export const updateUserService = async (id, name, lastnames, email) => {
  try {
    ShowLoading();
    const res = await axios.patch(`${URLUSER}/${id}`, {
      name,
      lastnames,
      email,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};

export const deleteUserService = async (id) => {
  try {
    ShowLoading();
    const res = await axios.delete(`${URLUSER}/${id}`);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
