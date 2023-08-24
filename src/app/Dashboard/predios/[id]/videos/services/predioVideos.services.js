import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import {
  HideLoading,
  AlertSuccess,
  ShowLoading,
  AlertError,
} from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio_url_videos`;
export const getPredioVideosService = async (predio_id) => {
  try {
    ShowLoading();
    const res = await axios.get(`${URLPREDIO}/${predio_id}`);
    HideLoading();
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.message);
  }
};
export const createPredioVideoService = async (url, predio_id) => {
  try {
    ShowLoading();
    const res = await axios.post(URLPREDIO, {
      url,
      predio_id,
    });
    HideLoading();
    AlertSuccess(res.data.msg);
    return res.data;
  } catch (error) {
    HideLoading();
    AlertError(error.response.data.msg);
  }
};
export const deletePredioVideoService = async (id) => {
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
