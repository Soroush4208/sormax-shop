import { OrderType } from "@/types/types";
import { Box, Button, TableCell, TableRow } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import ModalDetailsOrders from "../modal-details/ModalDetails";

interface OrderRowProps {
  row: OrderType;
  index: number;
  language: string;
  handleUpdateStatus: (orderId: string) => void;
}

const OrderRow: React.FC<OrderRowProps> = ({
  row,
  index,
  language,
  handleUpdateStatus,
}) => {
  const { t } = useTranslation();

  const formatNumber = (number: number) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      <TableCell align="center">{formatNumber(index + 1)}</TableCell>
      <TableCell sx={{ display: "flex", justifyContent: "center" }}>
        {row.products.length > 0 &&
        row.products[0].product.images.length > 0 ? (
          <Image
            src={`http://${row.products[0].product.images[0]}`}
            alt={row.products[0].product.name}
            width={50}
            height={50}
            unoptimized
          />
        ) : (
          "No Image"
        )}
      </TableCell>
      <TableCell
        align="center"
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "250px",
        }}
      >
        {row.user?.username ?? "Unknown"}
      </TableCell>
      <TableCell align="center">
        {row.deliveryStatus
          ? t("dashboard.orders.delivered")
          : t("dashboard.orders.pending")}
      </TableCell>
      <TableCell align="center">
        {row.deliveryDate
          ? new Date(row.deliveryDate).toLocaleDateString(
              language === "fa" ? "fa-IR" : "en-US"
            )
          : "N/A"}
      </TableCell>
      <TableCell align="center">
        {row.products.length > 0 ? row.products[0].count : "N/A"}
      </TableCell>
      <TableCell align="center">{formatNumber(row.totalPrice)}</TableCell>
      <TableCell align="center">
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalDetailsOrders order={row} />
          <Button
            variant="text"
            color="primary"
            onClick={() => handleUpdateStatus(row._id)}
            disabled={row.deliveryStatus === true}
          >
            {t("dashboard.orders.markAsDelivered")}
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default OrderRow;
