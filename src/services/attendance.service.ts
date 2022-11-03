import { api } from "src/api/api";

// children api methods
const getAllChildren = async () => {
  return api.get("children").then((response) => {
    let payload = response.data;
    return payload;
  });
};

const getOneChild = async (id) => {
  return api.get(`children/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createChild = async (payload) => {
  return api.post("children", payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const updateChild = async (id, payload) => {
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
  return api.post("youths", payload).then((response) => {
    let payload = response.data;
    return payload;
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

const getOneAdult = async (id) => {
  return api.get(`adults/${id}`).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const createAdult = async (payload) => {
  return api.post("adults", payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const updateAdult = async (id, payload) => {
  return api.put(`adults/${id}`, payload).then((response) => {
    let payload = response.data;
    return payload;
  });
};

const AttendanceService = {
  getAllChildren,
  getOneChild,
  createChild,
  updateChild,
  getAllYouths,
  getOneYouths,
  createYouths,
  updateYouths,
  getAllAdults,
  getOneAdult,
  createAdult,
  updateAdult,
};

export default AttendanceService;
