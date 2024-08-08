import Payment from "@/components/payment/components/Payment";
import PaymentLayout from "@/layout/PaymentLayout";
import { NextPageWithLayout } from "@/pages/_app";

const PaymentPage: NextPageWithLayout = () => {
  return <Payment />;
};

PaymentPage.getLayout = function getLayout(page) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default PaymentPage;
