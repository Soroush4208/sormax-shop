import Cart from "@/components/cart/components/Cart";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";

const CartPage: NextPageWithLayout = () => {
  return <Cart />;
};

CartPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
