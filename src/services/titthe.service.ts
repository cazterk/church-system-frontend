import { api } from "src/api/api";
import { ITithe } from "src/Interfaces/tithe.interface";

const getAllTithe = async () => {
  return await api.get("tithe").then((response: any) => {
    let payload = response.data;
    return payload;
  });
};

const createTithe = async (tithe) => {
  return await api.post("tithe", tithe).then((response: any) => {
    let payload = response.data;
    return payload;
  });
};

const TitheService = {
  getAllTithe,
  createTithe,
};

export default TitheService;
