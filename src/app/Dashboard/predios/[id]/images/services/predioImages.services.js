import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio_images`;
export const getPredioImagesService = async (id) => {
  try {
    ShowLoading();
    const res = await axios.get(`${URLPREDIO}/${id}`);
    HideLoading();
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
export const createPredioImageService = async (
  description,
  predio_id,
  myfile
) => {
  const formData = new FormData();
  formData.append("descripcion", description);
  formData.append("predio_id", predio_id);
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
export const updatePredioImageService = async (
  description,
  myfile,
  id,
  old_url
) => {
  const formData = new FormData();
  formData.append("descripcion", description);
  formData.append("old_url", old_url);
  myfile && formData.append("myfile", myfile);
  try {
    ShowLoading();
    const res = await axios.patch(`${URLPREDIO}/${id}`, formData);
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};

export const deletePredioImageService = async (id) => {
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
