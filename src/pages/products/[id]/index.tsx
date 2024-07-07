import SingleProducts from "@/components/singel-product/components/SingleProducts";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const SingleProductPage: NextPageWithLayout = () => {
  return <SingleProducts />;
};

SingleProductPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SingleProductPage;
