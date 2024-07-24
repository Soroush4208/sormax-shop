import { useGetAllProductsToDashboard } from "@/components/dashboard/hooks/index";
import useStore from "@/store/useStore";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

function TableQuantity() {
  const language = useStore((state) => state.language);
  const direction = useStore((state) => state.direction);
  const { data } = useGetAllProductsToDashboard();
  const { t } = useTranslation();
  const rows = data || [];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: any,
    newPage: React.SetStateAction<number>
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: {
    target: { value: string | number };
  }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const formatNumber = (number: number) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <>
      <Paper
        sx={{ width: "100%", border: "1px solid #e0e0e0", overflow: "hidden" }}
      >
        <TableContainer
          sx={{ maxHeight: 440, maxWidth: "100%", overflow: "auto" }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.row")}
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  {t("dashboard.table.images")}
                </TableCell>
                <TableCell align="center" colSpan={1}>
                  {t("dashboard.table.name")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.price")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.quantity")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell align="center" colSpan={2}>
                      {formatNumber(index + 1)}
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                      <Image
                        src={`http://${row.images[0]}`}
                        alt={row.name}
                        width={45}
                        height={45}
                      />
                    </TableCell>
                    <TableCell
                      align={direction === "rtl" ? "right" : "left"}
                      colSpan={3}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "50%",
                      }}
                    >
                      {row.name}
                      {row.quantity === 0 && (
                        <Typography sx={{ color: "red", display: "flex" }}>
                          {t("dashboard.table.quantityStatus")}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                      {formatNumber(row.price)}
                    </TableCell>
                    <TableCell align="center" colSpan={1}>
                      {formatNumber(row.quantity)}
                    </TableCell>
                  </TableRow>
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
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Button variant="text" color="primary" sx={{ mt: 4 }}>
        <Typography>{t("dashboard.quantity.save")}</Typography>
        <IconButton>
          <SaveIcon />
        </IconButton>
      </Button>
    </>
  );
}

export default TableQuantity;
