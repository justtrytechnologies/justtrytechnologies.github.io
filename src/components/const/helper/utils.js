import { toast } from "react-toastify"

export const showSuccssMsg = (msg) => {
    toast.success(msg, { autoClose: 2000 })
};

export const showErrMsg = (msg) => {
    toast.error(msg, { autoClose: 2000 });
};