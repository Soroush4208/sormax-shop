import Payment from "@/components/payment/components/Payment";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";

const PaymentPage: NextPageWithLayout = () => {
  return <Payment />;
};

PaymentPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PaymentPage;
