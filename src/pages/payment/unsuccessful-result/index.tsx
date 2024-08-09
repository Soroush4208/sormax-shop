import Payment from "@/components/payment/components/Payment";
import UnsuccessfulResult from "@/components/payment/components/unsuccessful-result/UnsuccessfulResult";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const UnSuccessfulResultPage: NextPageWithLayout = () => {
  return <UnsuccessfulResult />;
};

UnSuccessfulResultPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default UnSuccessfulResultPage;
