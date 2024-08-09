import SuccessfulResult from "@/components/payment/components/successful-result/SuccessfulResult";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const SuccessfulResultPage: NextPageWithLayout = () => {
  return <SuccessfulResult />;
};

SuccessfulResultPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SuccessfulResultPage;
