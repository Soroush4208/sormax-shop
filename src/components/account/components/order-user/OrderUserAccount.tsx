import { useGetAllOrdersUser } from "@/components/account/hooks/index";
import { OrderIdType } from "@/components/dashboard/services/type";
import { getIdCookie } from "@/components/login/services";
import Card from "@/components/shared/card/card/card/Card";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import ErrorIcon from "@mui/icons-material/Error";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function OrderUserAccount() {
  const { data: orders, isLoading, error } = useGetAllOrdersUser();
  const userId = getIdCookie();
  const language = useStore((state) => state.language);
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ErrorIcon color="error" fontSize="large" />
        <Typography color="error" sx={{ ml: 2 }}>
          Error loading orders.
        </Typography>
      </Box>
    );
  }

  const ordersArray = Array.isArray(orders) ? orders : [];

  const userOrders = ordersArray.filter(
    (order: OrderIdType) => order.user?._id === userId
  );
  if (userOrders.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          mx: "auto",
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          {t("cart.condition")}
        </Typography>
        <ShoppingBagIcon fontSize="large" />
      </Box>
    );
  }

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat(language === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "800px",
        overflow: "hidden",
        overflowY: "scroll",
        px: 4,
        pb: 2,
      }}
    >
      {userOrders.map((order: OrderIdType) => (
        <Box key={order._id} sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "black",
              color: "white",
              px: 2,
              py: 1,
              my: 1,
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {formatNumber(userOrders.indexOf(order) + 1, language)} -
                {t("dashboard.modal.order_details.products.order_date")} :
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {formatDate(order.createdAt)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {t("dashboard.modal.order_details.products.total_price")} :
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                }}
              >
                {formatNumber(order.totalPrice, language)}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", my: 1 }}>
            <Typography
              sx={{ color: "tomato", fontSize: "16px", fontWeight: "bold" }}
            >
              {t("dashboard.modal.order_details.products.status")} :{" "}
              {order.deliveryStatus
                ? t("dashboard.orders.delivered")
                : t("dashboard.orders.pending")}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {order.products.map((product) => (
              <Card
                key={product.product._id} // Added key prop here
                nameProduct={product.product.name}
                altImage={product.product.name}
                priceProduct={product.product.price}
                srcImage={`http://${product.product.images[0]}`}
                maxWidthSm={250}
                productId={product.product._id}
              />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default OrderUserAccount;
