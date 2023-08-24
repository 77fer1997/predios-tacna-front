import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import { HideLoading, ShowLoading, AlertError } from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio/prediowithimages`;
export const getPrediosWithImagesService = async () => {
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
