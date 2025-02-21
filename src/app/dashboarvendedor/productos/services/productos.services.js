import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/productos`;
export const getProductosService = async () => {
  try {
    ShowLoading();
    const res = await axios.get(URLPREDIO);
    HideLoading();
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
export const createProductoService = async (
  name,
  description,
  price,
  vendedor_id,
  myfile
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("vendedor_id", vendedor_id);
  formData.append("myfile", myfile);
  try {
    ShowLoading();
    const res = await axios.post(URLPREDIO, formData);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.msg);
  }
};
export const updateProductoService = async (
  id,
  name,
  description,
  price,
  old_url,
  myfile
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("old_url", old_url);
  myfile !== "" && formData.append("myfile", myfile);
  try {
    ShowLoading();
    const res = await axios.patch(`${URLPREDIO}/${id}`, formData);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error);
  }
};

export const deleteProductoService = async (id) => {
  try {
    ShowLoading();
    const res = await axios.delete(`${URLPREDIO}/${id}`);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
