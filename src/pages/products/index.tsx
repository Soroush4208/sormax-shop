import Products from "@/components/products/components/Products";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";

const ProductsPage: NextPageWithLayout = () => {
  return <Products />;
};

ProductsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ProductsPage;
