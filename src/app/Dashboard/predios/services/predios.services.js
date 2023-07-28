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
  description,
  lat,
  lon,
  administrador_id
) => {
  try {
    console.log(name, description, lat, lon, administrador_id);
    ShowLoading();
    const res = await axios.post(URLPREDIO, {
      name,
      description,
      lat,
      lon,
      administrador_id,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.msg);
  }
};
export const updatePredioService = async (id, name, description, lat, lon) => {
  try {
    ShowLoading();
    const res = await axios.patch(`${URLPREDIO}/${id}`, {
      name,
      description,
      lat,
      lon,
    });
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
