import Home from "@/components/home/components/Home";
import { ProductsType } from "@/components/home/hooks/type";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import { GetServerSideProps } from "next";

const HomePage: NextPageWithLayout = ({
  initialData,
}: {
  initialData: ProductsType[];
}) => {
  return <Home initialData={initialData} />;
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    "/products?sort=-createdAt&page=1&limit=all"
  );
  const initialData = response.data.data.products;
  return {
    props: {
      initialData,
    },
  };
};

export default HomePage;
