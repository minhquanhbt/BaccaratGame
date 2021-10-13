import { toast } from "react-toastify";

export const toastSuccess = (
  message,
  toastErrorOptions = {
    position: "top-right",
    hideProgressBar: false,
    autoClose: 2000,
  }
) => {
  toast.success(message, toastErrorOptions);
};

export const toastError = (
  message,
  toastErrorOptions= {
    position: "top-center",
    hideProgressBar: false,
    autoClose: 2500,
  }
) => {
  toast.error(message, toastErrorOptions);
};

export const toastWarning = (
  message,
  toastWarningOptions = {
    position: "top-center",
    hideProgressBar: false,
    autoClose: 2000,
  }
) => {
  toast.warning(message, toastWarningOptions);
};
