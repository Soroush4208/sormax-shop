import CatagoriesButton from "@/components/home/components/catagories-button/CatagoriesButton";
import ExpensiveProducts from "@/components/home/components/expensive-products/ExpensiveProducts";
import Featured from "@/components/home/components/featured/Featured";
import NewProducts from "@/components/home/components/new-products/NewProducts";
import OurProducts from "@/components/home/components/our-products/OurProducts";
import Services from "@/components/home/components/services-box/Services";
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
      <Featured />
      <Services />
    </>
  );
}

export default Home;
