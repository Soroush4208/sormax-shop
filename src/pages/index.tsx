import Home from "@/components/home/components/Home";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import { GetServerSideProps } from "next";

const HomePage: NextPageWithLayout = ({ data }: any) => {
  return <Home data={data} />;
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    "/products?sort=-createdAt&page=1&limit=all"
  );
  const data = response.data.data.products;
  console.log(data);
  return {
    props: {
      data,
    },
  };
};

export default HomePage;
