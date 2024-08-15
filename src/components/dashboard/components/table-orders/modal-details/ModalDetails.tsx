import { OrderIdType } from "@/components/dashboard/services/type";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ModalDetailsOrders({ order }: { order: OrderIdType }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const language = useStore((state) => state.language);

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

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(language === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{ color: "cornflowerblue", p: 0, m: 0 }}
      >
        <VisibilityIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <DialogTitle id="responsive-dialog-title">
            {t("dashboard.modal.order_details.title")}
          </DialogTitle>
          <Button onClick={handleCancelPayment} autoFocus sx={{ color: "red" }}>
            <HighlightOffIcon />
          </Button>
        </Box>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.username")} :
              </Typography>
              <Typography>{order.user?.username}</Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.phone_number")} :
              </Typography>
              <Typography>{order.user?.phoneNumber}</Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.address")} :
              </Typography>
              <Typography>{order.user?.address}</Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Typography sx={{ fontWeight: "bold", my: 1 }}>
              {t("dashboard.modal.order_details.products.title")} :
            </Typography>
          </DialogContentText>
          <Box
            sx={{
              maxHeight: "300px",
              overflow: "hidden",
              overflowY: "scroll",
              border: "1px solid #e5e5e5",
              borderRadius: "5px",
              p: 1,
              bgcolor: "#f2f2f2",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 2,
            }}
          >
            {order.products?.map((item) => (
              <Box
                key={item?._id}
                sx={{
                  display: "flex",
                  gap: 2,
                  bgcolor: "white",
                  p: 1,
                  border: "1px solid #e5e5e5",
                  borderRadius: "5px",
                  maxHeight: "100px",
                }}
              >
                <Image
                  src={`http://${item.product.images[0]}`}
                  alt={item.product.name}
                  width={80}
                  height={80}
                />
                <Box>
                  <DialogContentText>
                    <Typography>
                      {`${t(
                        "dashboard.modal.order_details.products.product_name"
                      )} : ${item?.product?.name}`}
                    </Typography>
                  </DialogContentText>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <DialogContentText sx={{ display: "flex", gap: 1 }}>
                      <Typography>
                        {t("dashboard.modal.order_details.products.price")} :
                      </Typography>
                      <Typography>
                        {formatNumber(item?.product?.price, language)}
                      </Typography>
                      <Typography>
                        {language === "fa" ? " تومان " : " $ "}
                      </Typography>
                    </DialogContentText>
                    <DialogContentText sx={{ display: "flex", gap: 1 }}>
                      <Typography>
                        {t("dashboard.modal.order_details.products.quantity")} :
                      </Typography>
                      <Typography>
                        {formatNumber(item?.count, language)}
                      </Typography>
                    </DialogContentText>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.products.order_date")} :
              </Typography>
              <Typography>{formatDate(order.createdAt)}</Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.products.delivery_date")} :
              </Typography>
              <Typography>{formatDate(order.deliveryDate)}</Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                {t("dashboard.modal.order_details.products.total_price")} :
              </Typography>
              <Typography>
                {formatNumber(order.totalPrice, language)}
                {language === "fa" ? " تومان " : " $ "}
              </Typography>
            </Box>
          </DialogContentText>
          <Divider sx={{ my: 1 }} />
          <DialogContentText>
            <Typography>
              {`${t("dashboard.modal.order_details.products.status")} : ${
                order.deliveryStatus
                  ? `${t("dashboard.orders.delivered")}`
                  : `${t("dashboard.orders.pending")}`
              }`}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ModalDetailsOrders;
