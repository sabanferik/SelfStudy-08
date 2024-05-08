import Swal from "sweetalert2";

export enum SweetAlertIcons {
    WARNING = "warning",
    SUCCESS = "success"
}

export const notify = (msg:string,icon:SweetAlertIcons) =>
  Swal.fire({
    title: "Anthony Todo App",
    text: msg,
    icon: icon,
    timer:3000,
    confirmButtonText: "Cool",
  });
