import Dashboard from "@/components/dashboard/components/Dashboard";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  return <Dashboard />;
};

DashboardPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardPage;
