import { ProductsType } from "@/components/home/hooks/type";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Loading from "@/components/shared/loading/Loading";
import ProductsComments from "@/components/singel-product/components/products-comments/ProductsComments";
import ProductsDetails from "@/components/singel-product/components/products-details/ProductsDetails";
import {
  useGetProductByCategory,
  useProduct,
} from "@/components/singel-product/hooks/index";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import SimilarProductsSlider from "./similar-product/SimilarProducts";

function SingleProducts({ initialData }: { initialData: ProductsType[] }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    isLoading,
    error,
  } = useProduct(id as string, initialData);
  const { data: products,} = useGetProductByCategory();

  // const SimilarProduct = products 

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <CustomizedBreadcrumbs
        href="/products"
        label="products"
        thirdCrumbLabel={product.category.name}
      />
      <ProductsDetails product={initialData} />
      <SimilarProductsSlider products={products} />
      <ProductsComments />
    </Box>
  );
}

export default SingleProducts;
