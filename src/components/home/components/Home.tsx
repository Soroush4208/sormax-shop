import CatagoriesButton from "@/components/home/components/catagories-button/CatagoriesButton";
import NewProducts from "@/components/home/components/new-products/NewProducts";
import CustomSwiper from "@/components/home/components/swiper/Swiper";
import ExpensiveProducts from "./expensive-products/ExpensiveProducts";

function Home({ data }: any) {
  return (
    <>
      <CustomSwiper />
      <CatagoriesButton />
      <NewProducts data={data} />
      <ExpensiveProducts />
    </>
  );
}

export default Home;
