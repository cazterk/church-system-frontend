import { api } from "src/api/api";

const getAllTithe = async () => {
  return await api.get("tithe").then((response: any) => {
    let payload = response.data;
    return payload;
  });
};

const TitheService = {
  getAllTithe,
};

export default TitheService;
