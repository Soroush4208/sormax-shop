import { useGetAllUsersToDashboard } from "@/components/dashboard/hooks/index";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useTranslation } from "react-i18next";

export default function TableAllUsers() {
  const language = useStore((state) => state.language);
  const { data } = useGetAllUsersToDashboard();
  const { t } = useTranslation();
  const rows = data || [];
  const [page, setPage] = React.useState(0);
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
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.firstName")}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.lastName")}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.userName")}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.address")}
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {t("dashboard.table.phoneNumber")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    <TableCell align="center" colSpan={2}>
                      {formatNumber(index + 1, language)}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {row.firstname}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {row.lastname}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {row.username}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {row.address}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {row.phoneNumber}
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
    </>
  );
}
