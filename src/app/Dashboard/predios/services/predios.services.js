import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio`;
export const getPrediosService = async () => {
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
export const createPredioService = async (
  name,
  video,
  description,
  lat,
  lon,
  administrador_id
) => {
  let formData = new FormData();
  formData.append("myfile", video);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("lat", lat);
  formData.append("lon", lon);
  formData.append("administrador_id", administrador_id);
  try {
    console.log(name, description, lat, lon, administrador_id);
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
export const updatePredioService = async (
  id,
  name,
  video,
  old_url,
  description,
  lat,
  lon
) => {
  let formData = new FormData();
  video && formData.append("myfile", video);
  formData.append("name", name);
  formData.append("description", description);
  formData.append("old_url", old_url);
  formData.append("lat", lat);
  formData.append("lon", lon);
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

export const deletePredioService = async (id) => {
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
