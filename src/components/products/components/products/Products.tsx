import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import { ProductsType } from "@/components/home/hooks/type";
import FiltersBox from "@/components/products/components/products/filters-box/FiltersBox";
import NoResults from "@/components/products/components/products/no-results/NoResults";
import ProductsBox from "@/components/products/components/products/prodacts-box/ProductsBox";
import SearchBox from "@/components/products/components/products/search-box/SearcheBox";
import { useGetProductsAll } from "@/components/products/hooks/index";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import Loading from "@/components/shared/loading/Loading";
import useStore from "@/store/useStore";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Button, Drawer, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Products({ initialData }: { initialData: ProductsType[] }) {
  const { data: products, isLoading, error } = useGetProductsAll(initialData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsType[]>(initialData);
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({});
  const direction = useStore((state) => state.direction);
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  const DrawerListFilter = (
    <Box
      sx={{
        width: 250,
        py: 2,
      }}
      role="presentation"
    >
      <Box sx={{ display: "flex", mb: 2, alignItems: "center", gap: 2 }}>
        <Image src={SormaxLogo.src} width={50} height={50} alt="SormaxLogo" />
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          {t("header.name")}
        </Typography>
      </Box>
      <FiltersBox onFilter={handleFilter} products={products || []} />
    </Box>
  );

  return (
    <>
      <CustomizedBreadcrumbs href="/products" label="products" />
      <SearchBox onSearch={handleSearch} />
      <Box sx={{ display: { xs: "flex", xl: "none" } }}>
        <Button onClick={toggleDrawer(true)}>
          <TuneIcon fontSize="large" sx={{ color: "black" }} />
        </Button>
        <Drawer
          anchor={direction === "rtl" ? "right" : "left"}
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {DrawerListFilter}
        </Drawer>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={2}>
          <Box sx={{ display: { xs: "none", xl: "block" } }}>
            <FiltersBox onFilter={handleFilter} products={products || []} />
          </Box>
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
