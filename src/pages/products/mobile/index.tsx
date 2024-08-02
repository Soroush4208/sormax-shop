import CategoryMobile from "@/components/products/components/mobile/CategoryMobile";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategoryMobilePage: NextPageWithLayout = () => {
  return <CategoryMobile />;
};

CategoryMobilePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategoryMobilePage;
