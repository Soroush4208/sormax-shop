import { ProductsType } from "@/components/home/hooks/type";
import MobileProduct from "@/components/products/components/mobile/mobile-product/MobileProduct";
import NoResults from "@/components/products/components/products/no-results/NoResults";
import SearchBox from "@/components/products/components/products/search-box/SearcheBox";
import { useGetProductsAll } from "@/components/products/hooks/index";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Loading from "@/components/shared/loading/Loading";
import SwiperCategories from "@/components/shared/swiper-categories/SwiperCategories";
import { useEffect, useState } from "react";

function CategoryMobile({ initialData }: { initialData: ProductsType[] }) {
  const { data: products, isLoading, error } = useGetProductsAll(initialData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsType[]>(initialData);

  const handleSearch = (searchTerm: string) => {
    if (products) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    if (products) {
      const filtered = products.filter(
        (product) => product.category.name === "موبایل  |  Mobile"
      );
      setFilteredProducts(filtered);
    }
  }, [products]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CustomizedBreadcrumbs href="/products" label="products" />
      <SwiperCategories image="mobile/mobile" />
      <SearchBox onSearch={handleSearch} />
      {filteredProducts?.length > 0 ? (
        <MobileProduct data={filteredProducts} isLoading={isLoading} />
      ) : (
        <NoResults />
      )}
    </>
  );
}

export default CategoryMobile;
