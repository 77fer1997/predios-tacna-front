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
export const createVendedorService = async (
  name,
  lastname,
  email,
  telefono,
  user,
  password,
  fecha_inicio,
  fecha_end,
  predio_id,
  predio_name
) => {
  try {
    ShowLoading();
    const res = await axios.post(URLVENDEDOR, {
      name,
      lastname,
      email,
      telefono,
      user,
      password,
      fecha_inicio,
      fecha_end,
      predio_id,
      predio_name,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
export const updateVendedorService = async (
  id,
  name,
  lastname,
  email,
  telefono,
  fecha_inicio,
  fecha_end,
  predio_id,
  predio_name
) => {
  try {
    ShowLoading();
    const res = await axios.patch(`${URLVENDEDOR}/${id}`, {
      name,
      lastname,
      email,
      telefono,
      fecha_inicio,
      fecha_end,
      predio_id,
      predio_name,
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
