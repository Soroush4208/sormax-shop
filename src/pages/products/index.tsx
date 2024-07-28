import { ProductsType } from "@/components/home/hooks/type";
import Products from "@/components/products/components/products/Products";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import { GetServerSideProps } from "next";

const ProductsPage: NextPageWithLayout = ({
  initialData,
}: {
  initialData: ProductsType[];
}) => {
  return <Products initialData={initialData} />;
};

ProductsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get("/products?limit=all");
  const initialData = response.data.data.products;
  console.log(initialData);
  return {
    props: {
      initialData,
    },
  };
};

export default ProductsPage;
