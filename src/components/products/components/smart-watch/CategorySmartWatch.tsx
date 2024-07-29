import { ProductsType } from "@/components/home/hooks/type";
import NoResults from "@/components/products/components/products/no-results/NoResults";
import SearchBox from "@/components/products/components/products/search-box/SearcheBox";
import SmartWatchProduct from "@/components/products/components/smart-watch/smart-watch-product/SmartWatchProduct";
import { useGetProductsAll } from "@/components/products/hooks/index";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Loading from "@/components/shared/loading/Loading";
import { useEffect, useState } from "react";

function CategorySmartWatch({ initialData }: { initialData: ProductsType[] }) {
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
        (product) => product.category.name === "ساعت هوشمند | Smart Watch"
      );
      setFilteredProducts(filtered);
    }
  }, [products]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CustomizedBreadcrumbs href="/products" label="products" />
      <SearchBox onSearch={handleSearch} />
      {filteredProducts?.length > 0 ? (
        <SmartWatchProduct data={filteredProducts} isLoading={isLoading} />
      ) : (
        <NoResults />
      )}
    </>
  );
}

export default CategorySmartWatch;
