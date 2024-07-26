import CatagoriesButton from "@/components/home/components/catagories-button/CatagoriesButton";
import ExpensiveProducts from "@/components/home/components/expensive-products/ExpensiveProducts";
import NewProducts from "@/components/home/components/new-products/NewProducts";
import OurProducts from "@/components/home/components/our-products/OurProducts";
import CustomSwiper from "@/components/home/components/swiper/Swiper";
import SwiperBanners from "@/components/home/components/swiper/SwiperBanners";
import { ProductsType } from "@/components/home/hooks/type";

function Home({ data }: { data: ProductsType[] }) {
  return (
    <>
      <CustomSwiper />
      <CatagoriesButton />
      <NewProducts data={data} />
      <ExpensiveProducts />
      <OurProducts data={data} />
      <SwiperBanners />
    </>
  );
}

export default Home;
