import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";

function IconHeart({
  color,
  colorCheck,
  size,
}: {
  color: string;
  colorCheck: string;
  size?: string;
}) {
  return (
    <Checkbox
      icon={<FavoriteBorder sx={{ fontSize: size, color: color }} />}
      checkedIcon={<FavoriteIcon sx={{ fontSize: size, color: colorCheck }} />}
      name="checkedH"
    />
  );
}

export default IconHeart;
