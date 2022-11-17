import { Slide, toast } from "react-toastify";

export const showEntrySuccessToast = (message) => {
  toast.success(`Entry posted succesfully \n ${message}.`, {
    transition: Slide,
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    transition: Slide,
  });
};

export const showLoginSuccessToast = (message) => {
  toast.success(`Login was successful. \n ${message}.`, {
    transition: Slide,
  });
};

export const showLoginErrorToast = (message) => {
  toast.error(`Login was not successful. \n ${message}.`, {
    transition: Slide,
  });
};
