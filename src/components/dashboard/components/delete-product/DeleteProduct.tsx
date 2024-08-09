import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { handleDelete } from "../../services";

function DeleteProduct({ row }: any) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteAndClose = async () => {
    await handleDelete(row._id);
    handleClose();
  };

  return (
    <>
      <Button
        sx={{ padding: 0, minWidth: "auto" }}
        color="inherit"
        onClick={handleClickOpen}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {t("dashboard.swal.title.title")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t("dashboard.swal.title.text")}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "black" }}>
            {t("dashboard.swal.cancelButtonText")}
          </Button>
          <Button
            onClick={handleDeleteAndClose}
            autoFocus
            sx={{ color: "red" }}
          >
            {t("dashboard.swal.confirmButtonText")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteProduct;
