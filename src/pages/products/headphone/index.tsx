import CategoryHeadphone from "@/components/products/components/headphone/CategoryHeadphone";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategoryHeadphonePage: NextPageWithLayout = () => {
  return <CategoryHeadphone />;
};

CategoryHeadphonePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategoryHeadphonePage;
