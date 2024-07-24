import CategoryCamera from "@/components/products/components/camera/CategoryCamera";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CategoryCameraPage: NextPageWithLayout = () => {
  return <CategoryCamera />;
};

CategoryCameraPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CategoryCameraPage;
