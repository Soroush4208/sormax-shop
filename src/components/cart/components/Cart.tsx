import CartTotalBox from "@/components/cart/components/cart-total-box/CartTotalBox";
import ProductsCart from "@/components/cart/components/products-cart/ProductsCart";
import CustomizedStepper from "@/components/shared/stepper/Stepper";
import { Box, Grid } from "@mui/material";

export default function Cart() {
  return (
    <Box sx={{ width: "100%" }}>
      <CustomizedStepper activeStep={1} />
      <Grid
        container
        spacing={2}
        sx={{ maxWidth: "1440px", width: "100%", mb: 12 }}
      >
        <Grid item xs={12} lg={9}>
          <ProductsCart />
        </Grid>
        <Grid item xs={12} lg={3}>
          <CartTotalBox />
        </Grid>
      </Grid>
    </Box>
  );
}
