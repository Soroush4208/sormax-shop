import { ProductsType } from "@/components/home/hooks/type";
import NoResults from "@/components/products/components/products/no-results/NoResults";
import ProductsBox from "@/components/products/components/products/prodacts-box/ProductsBox";
import SearchBox from "@/components/products/components/products/search-box/SearcheBox";
import { useGetProductsAll } from "@/components/products/hooks/index";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Loading from "@/components/shared/loading/Loading";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import FiltersBox from "./filters-box/FiltersBox";

function Products({ initialData }: { initialData: ProductsType[] }) {
  const { data: products, isLoading, error } = useGetProductsAll(initialData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsType[]>(initialData);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});

  const handleSearch = (searchTerm: string) => {
    if (products) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(lowercasedTerm)
      );
      setFilteredProducts(filtered);
    }
  };

  const handleFilter = (selected: { [key: string]: string[] }) => {
    setFilters(selected);
  };

  useEffect(() => {
    if (products) {
      let filtered = products;

      if (Object.keys(filters).length > 0) {
        filtered = filtered.filter((product) =>
          filters[product.category.name]?.includes(product.subcategory.name)
        );
      }

      setFilteredProducts(filtered);
    }
  }, [products, filters]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CustomizedBreadcrumbs href="/products" label="products" />
      <SearchBox onSearch={handleSearch} />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={2}>
          <FiltersBox onFilter={handleFilter} products={products || []} />
        </Grid>
        <Grid item xs={12} lg={10}>
          {filteredProducts.length > 0 ? (
            <ProductsBox data={filteredProducts} isLoading={isLoading} />
          ) : (
            <NoResults />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Products;
