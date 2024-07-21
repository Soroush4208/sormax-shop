import Checkout from "@/components/checkout/components/Checkout";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CheckoutPage: NextPageWithLayout = () => {
  return <Checkout />;
};

CheckoutPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CheckoutPage;
