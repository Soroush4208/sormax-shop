import Dashboard from "@/components/dashboard/components/Dashboard";
import AdminLayout from "@/layout/AdminLayout";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  return <Dashboard />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardPage;
