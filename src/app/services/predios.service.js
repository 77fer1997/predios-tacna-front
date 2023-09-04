import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
import { HideLoading, ShowLoading, AlertError } from "@/components/Alerts";

const URLPREDIO = `${BASE_URL}/predio/prediowithimages`;
export const getPrediosWithImagesService = async () => {
  try {
    const res = await axios.get(URLPREDIO);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
