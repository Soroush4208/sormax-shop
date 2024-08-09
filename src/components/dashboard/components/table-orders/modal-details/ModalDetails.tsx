import { OrderIdType } from "@/components/dashboard/services/type";
import useStore from "@/store/useStore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
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

function ModalDetailsOrders({ order }: { order: OrderIdType }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const language = useStore((state) => state.language);

  const formatNumber = (number: any) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

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
      <Button onClick={handleClickOpen} sx={{ color: "black", p: 0, m: 0 }}>
        <VisibilityIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">جزئیات سفارش</DialogTitle>
        <DialogContent>
          <DialogContentText>{`نام کاربری: ${order.user?.username}`}</DialogContentText>
          <DialogContentText>{`شماره تماس: ${order.user?.phoneNumber}`}</DialogContentText>
          <DialogContentText>{`آدرس: ${order.user?.address}`}</DialogContentText>
          <Divider sx={{ my: 2 }} />
          <DialogContentText>
            <strong>محصولات سفارش:</strong>
          </DialogContentText>
          {order.products?.map((productInOrder) => (
            <Box key={productInOrder?._id} sx={{ mb: 2 }}>
              <DialogContentText>
                نام محصول: {productInOrder?.product?.name}
              </DialogContentText>
              <DialogContentText>
                قیمت: {formatNumber(productInOrder?.product?.price)}
                تومان
              </DialogContentText>
              <DialogContentText>
                تعداد: {productInOrder?.count}
              </DialogContentText>
              <DialogContentText>
                مجموع:{" "}
                {formatNumber(
                  productInOrder?.product?.price * productInOrder?.count
                )}
                تومان
              </DialogContentText>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <DialogContentText>
            قیمت کل: {formatNumber(order.totalPrice)} تومان
          </DialogContentText>
          <DialogContentText>
            تاریخ تحویل: {formatNumber(order.deliveryDate)}
          </DialogContentText>
          <DialogContentText>
            وضعیت تحویل: {order.deliveryStatus ? "تحویل شده" : "در حال پردازش"}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleCancelPayment} autoFocus sx={{ color: "red" }}>
            {t("payment.modal.confirmButtonText")}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ModalDetailsOrders;
