import CatagoriesButton from "@/components/home/components/catagories-button/CatagoriesButton";
import ExpensiveProducts from "@/components/home/components/expensive-products/ExpensiveProducts";
import Featured from "@/components/home/components/featured/Featured";
import NewProducts from "@/components/home/components/new-products/NewProducts";
import OurProducts from "@/components/home/components/our-products/OurProducts";
import Services from "@/components/home/components/services-box/Services";
import CustomSwiper from "@/components/home/components/swiper/Swiper";
import SwiperBanners from "@/components/home/components/swiper/SwiperBanners";
import { useGetAllProductsToHome } from "@/components/home/hooks/index";
import { ProductsType } from "@/components/home/hooks/type";
import LoadingShop from "@/components/shared/loadingShop/loadingShop";

function Home({ initialData }: { initialData: ProductsType[] }) {
  const { data, isLoading, error } = useGetAllProductsToHome(initialData);

  if (isLoading) return <LoadingShop />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CustomSwiper />
      <CatagoriesButton />
      <NewProducts data={data} />
      <ExpensiveProducts />
      <OurProducts data={data} />
      <SwiperBanners />
      <Featured />
      <Services />
    </>
  );
}

export default Home;
