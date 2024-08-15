import ContactUs from "@/components/contact-us/ContactUs";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const ContactUsPage: NextPageWithLayout = () => {
  return <ContactUs />;
};

ContactUsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ContactUsPage;
