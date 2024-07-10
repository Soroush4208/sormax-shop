import Cart from "@/components/cart/components/Cart";
import { NextPageWithLayout } from "../_app";
import Layout from "@/layout/Layout";

const CartPage: NextPageWithLayout = () => {
  return <Cart />;
};

CartPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default CartPage;
