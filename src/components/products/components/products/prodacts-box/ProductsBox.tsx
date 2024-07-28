import { ProductsType } from "@/components/home/hooks/type";
import Card from "@/components/shared/card/card/card/Card";
import { Box, Skeleton } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";

function ProductsBox({
  data: products,
  isLoading,
}: {
  data: ProductsType[] | undefined;
  isLoading: boolean;
}) {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Box sx={{ position: "relative", mt: 2 }}>
        <Box
          sx={{
            maxWidth: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {isLoading || showSkeleton
            ? Array.from(new Array(12)).map((_, index) => (
                <Box key={index} sx={{ width: 270 }}>
                  <Skeleton variant="rectangular" width={270} height={118} />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))
            : currentProducts &&
              currentProducts.map((product) => (
                <Card
                  maxWidth={270}
                  key={product._id}
                  productId={product._id}
                  srcImage={`http://${product.images[0]}`}
                  altImage={product.name}
                  nameProduct={product.name}
                  priceProduct={product.price}
                  quantity={product.quantity}
                />
              ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "absolute",
            bottom: -55,
            fontSize: "28px",
            fontWeight: "300",
          }}
        >
          {products && (
            <Stack sx={{ fontSize: "28px", fontWeight: "300" }} spacing={2}>
              <Pagination
                count={Math.ceil((products.length || 0) / productsPerPage)}
                page={page}
                onChange={handleChangePage}
                showFirstButton
                showLastButton
              />
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
}

export default ProductsBox;
