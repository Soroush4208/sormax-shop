import AboutUs from "@/components/about-us/AboutUs";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const AboutUsPage: NextPageWithLayout = () => {
  return <AboutUs />;
};

AboutUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AboutUsPage;
