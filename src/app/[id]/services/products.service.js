import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";

const URLPREDIO = `${BASE_URL}/productos/productsbypredio`;
export const getProductsByPredio = async (id) => {
  try {
    const { data } = await axios.get(`${URLPREDIO}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
