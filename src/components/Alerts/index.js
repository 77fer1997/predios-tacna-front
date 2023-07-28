import Swal from "sweetalert2";

export const AlertError = (text = "Contact your developer", onClickButton) => {
  Swal.fire({
    icon: "error",
    title: "Ocurrio un error inesperado.",
    text,
    color: "#4e4d4e",
    iconColor: "#d17495",
    confirmButtonColor: "#d17495",
    confirmButtonText: "Close",
  }).then((result) => {
    /* if (result.isConfirmed) {
      onClickButton();
    } */
  });
};

export const AlertSuccess = (
  text = "",
  onClickButton,
  buttonText = "Close"
) => {
  Swal.fire({
    title: "La operación se realizó con éxito.",
    text,
    icon: "success",
    color: "#4e4d4e",
    iconColor: "#4d7a82",
    confirmButtonColor: "#4d7a82",
    confirmButtonText: buttonText,
  }); /* .then((result) => {
    if (result.isConfirmed) {
      onClickButton();
    }
  }); */
};

export const ShowLoading = (text = "Please wait") => {
  Swal.fire({
    title: "Cargando...",
    text,
    icon: "info",
    iconColor: "#4d7a82",
    color: "#4e4d4e",
    allowOutsideClick: false,
    /* customClass: {
      loader: "loaderLoading",
    }, */
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const HideLoading = () => {
  Swal.close();
};

export const ShowConfirm = (
  text = "No podras revertir está acción",
  onClickYes
) => {
  Swal.fire({
    title: "¿Estás seguro?",
    text,
    icon: "warning",
    showCancelButton: true,
    iconColor: "#cfc67a",
    confirmButtonColor: "#4d7a82",
    cancelButtonColor: "#d17495",
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      onClickYes();
    }
  });
};
