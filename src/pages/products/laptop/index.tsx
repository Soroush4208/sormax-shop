import CategoryLaptop from "@/components/products/components/laptop/CategoryLaptop";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategoryLaptopPage: NextPageWithLayout = () => {
  return <CategoryLaptop />;
};

CategoryLaptopPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategoryLaptopPage;
