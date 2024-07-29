import { ProductsType } from "@/components/home/hooks/type";
import SingleProducts from "@/components/singel-product/components/SingleProducts";
import Layout from "@/layout/Layout";
import { NextPageWithLayout } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  initialData: ProductsType[];
};

const SingleProductPage: NextPageWithLayout = ({
  initialData,
}: {
  initialData: ProductsType[];
}) => {
  return <SingleProducts initialData={initialData} />;
};

SingleProductPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`/products?limit=all`);
  const products: ProductsType[] = response.data.data.products;

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));
  console.log(paths);
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { id } = context.params!;
  const response = await axios.get(`/products/${id}`);
  const initialData = [response.data.data.product];

  return {
    props: {
      initialData,
    },
    revalidate: 10,
  };
};

export default SingleProductPage;
