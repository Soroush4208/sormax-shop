import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Grid } from "@mui/material";
import Link from "next/link";

function IconView({ color, productID }: { color: string; productID: string }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Link href={`/products/${productID}`}>
          <VisibilityOutlinedIcon sx={{ color: color, mt: 1 }} />
        </Link>
      </Grid>
    </Grid>
  );
}

export default IconView;
