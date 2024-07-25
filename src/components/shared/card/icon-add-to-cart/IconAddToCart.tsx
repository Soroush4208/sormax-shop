import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Checkbox, Grid } from "@mui/material";

function IconAddToCart({
  color,
  colorCheck,
}: {
  color: string;
  colorCheck: string;
}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Checkbox
          icon={<AddShoppingCartIcon sx={{ color: color }} />}
          checkedIcon={<ShoppingCartIcon sx={{ color: colorCheck }} />}
          name="checkedH"
        />
      </Grid>
    </Grid>
  );
}

export default IconAddToCart;
