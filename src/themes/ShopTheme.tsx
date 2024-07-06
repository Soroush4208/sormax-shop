import { createTheme } from "@mui/material";
import { Roboto, Vazirmatn } from "next/font/google";

// Importing both fonts
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const ShopTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, ${roboto.style.fontFamily}, Roboto`,
        },
      },
    },
  },
  direction: "rtl",
});
