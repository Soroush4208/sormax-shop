import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ModalCanceled() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancelPayment = async () => {
    handleClose();
    // router.push("/");
  };

  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="warning"
        onClick={handleClickOpen}
      >
        {t("payment.cart_info.cancel")}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t("payment.modal.title.title")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{t("payment.modal.title.text")}</DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "black" }}>
            {t("payment.modal.cancelButtonText")}
          </Button>
          <a href="/">
            <Button
              onClick={handleCancelPayment}
              autoFocus
              sx={{ color: "red" }}
            >
              {t("payment.modal.confirmButtonText")}
            </Button>
          </a>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalCanceled;
