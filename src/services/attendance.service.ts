import { api } from "src/api/api";
import { showEntrySuccessToast, showErrorToast } from "src/components/toasts";

// children api methods
const getAllChildren = async () => {
  return api.get("children").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneChildrenEntry = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return api.get(`children/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createChildren = async (children) => {
  return api
    .post("children", children)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateChildren = async ({ id, ...payload }) => {
  return api
    .put(`children/${id}`, payload)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting in soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

// youths ap methods
const getAllYouths = async () => {
  return api.get("youths").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneYouthsEntry = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return api.get(`youths/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createYouths = async (payload) => {
  return api
    .post("youths", payload)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateYouths = async ({ id, ...payload }) => {
  return api
    .put(`youths/${id}`, payload)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting in 2 soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

// adults api methods
const getAllAdults = async () => {
  return api.get("adults").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneAdultsEntry = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  return api.get(`adults/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createAdults = async (payload) => {
  return api
    .post("adults", payload)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting in 5 soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateAdults = async ({ id, ...payload }) => {
  return api
    .put(`adults/${id}`, payload)
    .then((response) => {
      if (response.status === 200) {
        showEntrySuccessToast(response.status + " redirecting in 5 soon.");
        setTimeout(() => window.location.replace("/attendance"), 2000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const AttendanceService = {
  getAllChildren,
  getOneChildrenEntry,
  createChildren,
  updateChildren,
  getAllYouths,
  getOneYouthsEntry,
  createYouths,
  updateYouths,
  getAllAdults,
  getOneAdultsEntry,
  createAdults,
  updateAdults,
};

export default AttendanceService;
