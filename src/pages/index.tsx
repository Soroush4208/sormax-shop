import Home from "@/components/home/components/Home";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
