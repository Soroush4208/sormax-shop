import CheckIcon from "@mui/icons-material/Check";
import { Box } from "@mui/material";
import { useState } from "react";

function ColorsProducts() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const colors = ["gray", "white", "black"];

  return (
    <Box sx={{ display: "flex", gap: 2, my: 1 }}>
      {colors?.map((color) => (
        <Box
          key={color}
          sx={{
            width: "30px",
            height: "30px",
            bgcolor: color,
            border: "1px solid gray",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
            boxShadow: selectedColor === color ? "0 0 0 2px blue" : "none",
          }}
          onClick={() => handleColorClick(color)}
        >
          {selectedColor === color && (
            <CheckIcon
              sx={{
                color: color === "white" ? "black" : "white",
                fontSize: "20px",
                position: "absolute",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}

export default ColorsProducts;
