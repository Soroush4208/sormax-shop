import FaqPage from "@/components/faq/Faq";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";

const FAQPage: NextPageWithLayout = () => {
  return <FaqPage />;
};

FAQPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default FAQPage;
