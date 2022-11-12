import { api } from "src/api/api";
import { showEntrySuccessToast, showErrorToast } from "src/components/toasts";

const getAllTithe = async () => {
  return await api.get("tithe").then((response: any) => {
    let payload = response.data;
    return payload;
  });
};
const getOneTitheEntry = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return await api.get(`tithe/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createTithe = async (tithe) => {
  return await api
    .post("tithe", tithe)
    .then((response: any) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting soon.");
        console.log("success");
        setTimeout(() => window.location.replace("/tithe"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateTithe = async ({ id, ...payload }) => {
  return api
    .put(`tithe/${id}`, payload)
    .then((response: any) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting soon.");
        setTimeout(() => window.location.replace("/tithe"), 2000);
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
  getOneTitheEntry,
  createTithe,
  updateTithe,
};

export default TitheService;
