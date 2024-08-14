import Account from "@/components/account/components/Account";
import AccountLayout from "@/layout/AccountLayout";
import { NextPageWithLayout } from "@/pages/_app";

const AccountPage: NextPageWithLayout = () => {
  return <Account />;
};

AccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default AccountPage;
