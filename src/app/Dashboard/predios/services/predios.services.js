import axios from "axios";
import { BASE_URL } from "@/constants/Services.constants";

export const getPredios = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}/predio`);
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const getPredioById = async ({ id }) => {
  try {
    const resp = await axios.get(`${BASE_URL}/predio/${id}`);
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const addPredio = async ({
  name,
  description,
  lat,
  lon,
  administrador_id,
}) => {
  try {
    const resp = await axios.post(`${BASE_URL}/predio`, {
      name,
      description,
      lat,
      lon,
      administrador_id,
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const updatePredio = async ({
  id,
  name,
  description,
  lat,
  lon,
  administrador_id,
}) => {
  try {
    const resp = await axios.patch(`${BASE_URL}/predio/${id}`, {
      name,
      description,
      lat,
      lon,
      administrador_id,
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const deletePredio = async ({ id }) => {
  try {
    const resp = await axios.delete(`${BASE_URL}/predio/${id}`);
    return resp.data;
  } catch (error) {
    return error;
  }
};
