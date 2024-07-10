import Account from "@/components/account/components/Account";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "../_app";

const AccountPage: NextPageWithLayout = () => {
  return <Account />;
};

AccountPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AccountPage;
