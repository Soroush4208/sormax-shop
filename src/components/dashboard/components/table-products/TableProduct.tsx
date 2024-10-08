import AddProduct from "@/components/dashboard/components/add-products/AddProduct";
import DeleteProduct from "@/components/dashboard/components/delete-product/DeleteProduct";
import EditProduct from "@/components/dashboard/components/edit-products/EditProduct";
import { useGetAllProductsToDashboard } from "@/components/dashboard/hooks";
import Loading from "@/components/shared/loading/Loading";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useTranslation } from "react-i18next";

export default function TableProduct() {
  const language = useStore((state) => state.language);
  const [page, setPage] = React.useState(0);
  const { data, isLoading, isError } = useGetAllProductsToDashboard(page);
  const { t } = useTranslation();
  const rows = data || [];
  const totalRows = data?.length || 0;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading products</div>;

  return (
    <>
      <Paper
        sx={{ width: "100%", border: "1px solid #e0e0e0", overflow: "hidden" }}
      >
        <TableContainer sx={{ maxHeight: 440, overflow: "auto" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.row")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.images")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.name")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.category")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.subcategory")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.brand")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.price")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.createdAt")}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  {t("dashboard.table.actions")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell align="center" colSpan={2}>
                      {formatNumber(index + 1 + page * rowsPerPage, language)}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
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
                      align="right"
                      colSpan={3}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "250px",
                      }}
                    >
                      {row.name}
                      {row.quantity === 0 && (
                        <Typography sx={{ color: "red", display: "flex" }}>
                          {t("dashboard.table.quantityStatus")}
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {row.category.name}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {row.subcategory.name}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {row.brand}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {formatNumber(row.price, language)}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      {new Date(row.createdAt).toLocaleDateString(
                        language === "fa" ? "fa-IR" : "en-US"
                      )}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <EditProduct product={row} />
                        <DeleteProduct row={row} />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <AddProduct />
    </>
  );
}
