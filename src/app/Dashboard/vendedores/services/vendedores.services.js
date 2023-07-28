import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const { BASE_URL } = require("@/constants/Services.constants");
const { default: axios } = require("axios");

const URLVENDEDOR = `${BASE_URL}/vendedor`;
export const getVendedoresService = async () => {
  try {
    const res = await axios.get(URLVENDEDOR);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createVendedorService = async ({
  name,
  lastnames,
  email,
  user,
  password,
}) => {
  try {
    ShowLoading();
    const res = await axios.post(URLVENDEDOR, {
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
export const updateVendedorService = async (id, name, lastnames, email) => {
  try {
    ShowLoading();
    const res = await axios.patch(`${URLVENDEDOR}/${id}`, {
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

export const deleteVendedorService = async (id) => {
  try {
    ShowLoading();
    const res = await axios.delete(`${URLVENDEDOR}/${id}`);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
