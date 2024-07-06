import Home from "@/components/home/components";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default HomePage;
