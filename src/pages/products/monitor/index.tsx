import CategoryMonitor from "@/components/products/components/monitor/CategoryMonitor";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategoryMonitorPage: NextPageWithLayout = () => {
  return <CategoryMonitor />;
};

CategoryMonitorPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategoryMonitorPage;
