import HeaderPayment from "@/components/payment/components/header-payment/HeaderPayment";
import { Box, Grid } from "@mui/material";
import CartInfo from "./cart-info/CartInfo";
import ReceiverInfo from "./receiver-info/ReceiverInfo";

function Payment() {
  return (
    <Box>
      <HeaderPayment />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={7}>
          <CartInfo />
        </Grid>
        <Grid item xs={12} md={6} lg={5}>
          <ReceiverInfo />
        </Grid>
      </Grid>
      <Box></Box>
    </Box>
  );
}

export default Payment;
