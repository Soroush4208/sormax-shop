import FilterButtons from "@/components/dashboard/components/table-orders/filter-buttons/FilterButtons";
import OrdersTable from "@/components/dashboard/components/table-orders/orders-table/OrdersTable";
import {
  useGetAllOrdersToDashboard,
  useUpdateDeliveryStatus,
} from "@/components/dashboard/hooks";
import Loading from "@/components/shared/loading/Loading";
import useStore from "@/store/useStore";
import { OrderType } from "@/types/types";
import React from "react";

const TableOrders: React.FC = () => {
  const language = useStore((state) => state.language);
  const { data: orders, isError, isLoading } = useGetAllOrdersToDashboard();
  const updateDeliveryStatus = useUpdateDeliveryStatus();

  const rows: OrderType[] | [] = orders || [];
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

  const handleUpdateStatus = (orderId: string, newStatus: boolean) => {
    console.log(`Updating status for order ID: ${orderId}`);
    updateDeliveryStatus.mutate({ orderId, newStatus });
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
        handleUpdateStatus={handleUpdateStatus} // Passing the correct handleUpdateStatus function
      />
    </>
  );
};

export default TableOrders;
