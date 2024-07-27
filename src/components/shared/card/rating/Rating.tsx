import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless +",
  1.5: "Poor",
  2: "Poor +",
  2.5: "Ok",
  3: "Ok +",
  3.5: "Good",
  4: "Good +",
  4.5: "Excellent",
  5: "Excellent +",
};

export default function TextRating({ number }: { number: number }) {
  const value = number;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "end",
        justifyContent: "end",
        direction: "ltr",
        position: "absolute",
        left: 10,
        bottom: 5,
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2, fontSize:"14px"}}>{labels[value]}</Box>
    </Box>
  );
}
