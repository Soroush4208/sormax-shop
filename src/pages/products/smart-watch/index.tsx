import CategorySmartWatch from "@/components/products/components/smart-watch/CategorySmartWatch";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategorySmartWatchPage: NextPageWithLayout = () => {
  return <CategorySmartWatch />;
};

CategorySmartWatchPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategorySmartWatchPage;
