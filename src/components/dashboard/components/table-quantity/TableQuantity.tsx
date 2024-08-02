import {
  useGetAllProductsToDashboard,
  useUpdateInventory,
} from "@/components/dashboard/hooks/index";
import useStore from "@/store/useStore";
import { IProduct } from "@/types/types";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
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
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function TableQuantity() {
  const language = useStore((state) => state.language);
  const direction = useStore((state) => state.direction);
  const { data } = useGetAllProductsToDashboard();
  const { t } = useTranslation();
  const rows = data || [];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isClickedQuantity, setIsClickedQuantity] = useState(null);
  const [isClickedPrice, setIsClickedPrice] = useState(null);
  const [newValues, setNewValues] = useState<IProduct[]>([]);

  const { mutate } = useUpdateInventory();

  function changeQuantity(e: any, row: IProduct) {
    const newQuantity = +e.target.value;
    const foundedId = newValues.findIndex(
      (item: IProduct) => item._id === row._id
    );
    if (foundedId > -1) {
      newValues[foundedId].quantity = newQuantity;
    } else {
      newValues.push({ _id: row._id, quantity: newQuantity });
    }
    setNewValues([...newValues]);
  }

  function changePrice(e: any, row: IProduct) {
    const newPrice = +e.target.value;
    const foundedId = newValues.findIndex(
      (item: IProduct) => item._id === row._id
    );
    if (foundedId > -1) {
      newValues[foundedId].price = newPrice;
    } else {
      newValues.push({ _id: row._id, price: newPrice });
    }
    setNewValues([...newValues]);
  }
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

  const handelUpdate = () => {
    mutate(newValues);
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
                    <Link href={`/products/${row._id}`}>
                        <Image
                          src={`http://${row.images[0]}`}
                          alt={row.name}
                          width={50}
                          height={50}
                        />
                      </Link>
                    </TableCell>
                    <TableCell
                      align={direction === "rtl" ? "right" : "left"}
                      colSpan={3}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "40%",
                        width: "700px",
                      }}
                    >
                      {row.name}
                      {row.quantity === 0 && (
                        <Typography sx={{ color: "red", display: "flex" }}>
                          {t("dashboard.table.quantityStatus")}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell align="center" sx={{ width: "150px" }}>
                      {isClickedPrice === row._id ? (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <TextField
                            autoFocus
                            sx={{
                              width: "130px",
                              height: "40px",
                              mt: "-15px",
                            }}
                            defaultValue={
                              newValues.find((item) => item._id === row._id)
                                ?.price || row.price
                            }
                            onChange={(e) => changePrice(e, row)}
                            onBlur={() => setIsClickedPrice(null)}
                          />
                        </Box>
                      ) : (
                        <Box
                          id={row._id}
                          sx={{
                            width: "100%",
                            px: 4,
                            py: 1,
                            textAlign: "center",
                            borderRadius: 2,
                            color: newValues.find(
                              (item) => item._id === row._id && item.price
                            )
                              ? "white"
                              : "black",
                            bgcolor: newValues.find(
                              (item) => item._id === row._id && item.price
                            )
                              ? "black"
                              : "",
                          }}
                          onClick={() => row._id! && setIsClickedPrice(row._id)}
                        >
                          {formatNumber<any>(
                            `${
                              newValues.find((item) => item._id === row._id)
                                ?.price ?? row.price
                            }`
                          )}
                        </Box>
                      )}
                    </TableCell>

                    <TableCell align="center" sx={{ width: "100px" }}>
                      {isClickedQuantity === row._id ? (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <TextField
                            autoFocus
                            defaultValue={
                              newValues.find((item) => item._id === row._id)
                                ?.quantity || row.quantity
                            }
                            sx={{ width: "80px", height: "40px", mt: "-15px" }}
                            onChange={(e) => changeQuantity(e, row)}
                            onBlur={() => setIsClickedQuantity(null)}
                          />
                        </Box>
                      ) : (
                        <Box
                          id={row._id}
                          sx={{
                            width: "40%",
                            m: "auto",
                            px: 4,
                            py: 1,
                            textAlign: "center",
                            borderRadius: 2,
                            color: newValues.find(
                              (item) => item._id === row._id && item.quantity
                            )
                              ? "white"
                              : "black",
                            bgcolor: newValues.find(
                              (item) => item._id === row._id && item.quantity
                            )
                              ? "black"
                              : "",
                          }}
                          onClick={() =>
                            row._id! && setIsClickedQuantity(row._id)
                          }
                        >
                          <>
                            {formatNumber<any>(
                              `${
                                newValues.find((item) => item._id === row._id)
                                  ?.quantity ?? row.quantity
                              }`
                            )}
                          </>
                        </Box>
                      )}
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
      <Button
        variant="outlined"
        onClick={handelUpdate}
        color="primary"
        sx={{ mt: 4 }}
      >
        <Typography>{t("dashboard.quantity.save")}</Typography>
        <IconButton>
          <SaveIcon />
        </IconButton>
      </Button>
    </>
  );
}

export default TableQuantity;
