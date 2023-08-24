import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import { HideLoading, ShowLoading, AlertError } from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio_url_videos`;
export const getPredioVideosService = async (id) => {
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
