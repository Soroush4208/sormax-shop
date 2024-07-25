import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox, Grid } from "@mui/material";

function IconHeart({
  color,
  colorCheck,
}: {
  color: string;
  colorCheck: string;
}) {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Checkbox
          icon={<FavoriteBorder sx={{ color: color }} />}
          checkedIcon={<FavoriteIcon sx={{ color: colorCheck }} />}
          name="checkedH"
        />
      </Grid>
    </Grid>
  );
}

export default IconHeart;
