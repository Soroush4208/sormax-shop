import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";
import AboutUs from "@/components/about-us/AboutUs";

const AboutUsPage: NextPageWithLayout = () => {
  return <AboutUs />;
};

AboutUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutUsPage;
