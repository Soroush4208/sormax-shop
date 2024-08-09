import CustomizedStepper from "@/components/shared/stepper/Stepper";
import { Grid } from "@mui/material";
import OrderBoxCheckout from "./order-box/OrderBoxCheckout";
import UserInfo from "./user-info/UserInfo";

function Checkout() {
  return (
    <>
      <CustomizedStepper activeStep={2} />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={5}>
          <OrderBoxCheckout />
        </Grid>
        <Grid item xs={12} lg={7}>
          <UserInfo />
        </Grid>
      </Grid>
    </>
  );
}

export default Checkout;
