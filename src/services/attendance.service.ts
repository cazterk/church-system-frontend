import { api } from "src/api/api";
import { showEntrySuccessToast, showErrorToast } from "src/components/toasts";

// children api methods
const getAllChildren = async () => {
  return api.get("children").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getChildren = async (id) => {
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
        showEntrySuccessToast(response.status + " redirecting in 5 seconds");
        setTimeout(() => window.location.replace("/attendance"), 5000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateChildren = async (id, payload) => {
  return api.put(`children/${id}`, payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

// youths ap methods
const getAllYouths = async () => {
  return api.get("youths").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneYouths = async (id) => {
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
        showEntrySuccessToast(response.status + " redirecting in 5 seconds");
        setTimeout(() => window.location.replace("/attendance"), 5000);
      }
      let payload = response.data;
      return payload;
    })
    .catch((err) => {
      showErrorToast(err.message);
    });
};

const updateYouths = async (id, payload) => {
  return api.put(`youths/${id}`, payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

// adults api methods
const getAllAdults = async () => {
  return api.get("adults").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneAdultsEntry = async (id) => {
  return api.get(`adults/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createAdults = async (payload) => {
  return api.post("adults", payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const updateAdults = async (id, payload) => {
  return api.put(`adults/${id}`, payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const AttendanceService = {
  getAllChildren,
  getChildren,
  createChildren,
  updateChildren,
  getAllYouths,
  getOneYouths,
  createYouths,
  updateYouths,
  getAllAdults,
  getOneAdultsEntry,
  createAdults,
  updateAdults,
};

export default AttendanceService;
