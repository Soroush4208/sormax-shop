import FilterButtons from "@/components/dashboard/components/TableOrders/FilterButtons/FilterButtons";
import OrdersTable from "@/components/dashboard/components/TableOrders/OrdersTable/OrdersTable";
import { useGetAllOrdersToDashboard } from "@/components/dashboard/hooks";
import Loading from "@/components/shared/loading/Loading";
import useStore from "@/store/useStore";
import { OrderType } from "@/types/types";
import React from "react";

const TableOrders: React.FC = () => {
  const language = useStore((state) => state.language);
  const { data, isError, isLoading } = useGetAllOrdersToDashboard();

  const rows: OrderType[] = Array.isArray(data) ? data : [];
  console.log("Rows:", rows);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [filter, setFilter] = React.useState<"all" | "delivered" | "pending">(
    "all"
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFilterChange = (newFilter: "all" | "delivered" | "pending") => {
    setFilter(newFilter);
    setPage(0);
  };

  const handleUpdateStatus = (orderId: string) => {
    console.log(`Updating status for order ID: ${orderId}`);
  };



  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading data. Please try again later.</div>;
  }

  const filteredRows = rows.filter((row) => {
    if (filter === "delivered") {
      return row.deliveryStatus;
    } else if (filter === "pending") {
      return !row.deliveryStatus;
    } else {
      return true;
    }
  });

  return (
    <>
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
      <OrdersTable
        rows={filteredRows}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        language={language}
        handleUpdateStatus={handleUpdateStatus}
      />
    </>
  );
};

export default TableOrders;
