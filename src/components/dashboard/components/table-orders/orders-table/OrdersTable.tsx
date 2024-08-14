import OrderRow from "@/components/dashboard/components/table-orders/order-row/OrderRow";
import { OrderType } from "@/types/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface OrdersTableProps {
  rows: OrderType[];
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  language: string;
  handleUpdateStatus: (orderId: string, newStatus: boolean) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({
  rows,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  language,
  handleUpdateStatus,
}) => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{ width: "100%", border: "1px solid #e0e0e0", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 440, overflow: "auto" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">{t("dashboard.table.row")}</TableCell>
              <TableCell align="center">
                {t("dashboard.table.images")}
              </TableCell>
              <TableCell align="center">
                {t("dashboard.table.userName")}
              </TableCell>
              <TableCell align="center">
                {t("dashboard.table.deliveryStatus")}
              </TableCell>
              <TableCell align="center">
                {t("dashboard.table.deliveryDate")}
              </TableCell>
              <TableCell align="center">{t("dashboard.table.price")}</TableCell>
              <TableCell align="center">
                {t("dashboard.table.actions")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <OrderRow
                  key={row._id}
                  row={row}
                  index={index}
                  language={language}
                  handleUpdateStatus={() =>
                    handleUpdateStatus(row._id, !row.deliveryStatus)
                  }
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
};

export default OrdersTable;
