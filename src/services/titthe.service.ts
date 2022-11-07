import { api } from "src/api/api";
import { showEntrySuccessToast, showErrorToast } from "src/components/toasts";
import { ITithe } from "src/Interfaces/tithe.interface";

const getAllTithe = async () => {
  return await api.get("tithe").then((response: any) => {
    let payload = response.data;
    return payload;
  });
};

const createTithe = async (tithe) => {
  return await api
    .post("tithe", tithe)
    .then((response: any) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting in 5");
        console.log("success");
        setTimeout(() => window.location.replace("/tithe"), 5000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const TitheService = {
  getAllTithe,
  createTithe,
};

export default TitheService;
