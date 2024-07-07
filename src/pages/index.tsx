import Home from "@/components/home/components";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
