import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";
export const uploadImage = async ({ id, description, image }) => {
  let formData = new FormData();
  formData.append("myfile", image);
  formData.append("description", description);
  try {
    const resp = await axios.post(`${BASE_URL}/predio/${id}/upload`, formData);
    return resp.data;
  } catch (error) {
    return error;
  }
};
