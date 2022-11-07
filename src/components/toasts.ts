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
