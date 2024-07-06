import { createTheme } from "@mui/material";
import { Lato, Vazirmatn } from "@next/font/google"; // Change this line

// Importing both fonts
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const ShopTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, ${lato.style.fontFamily}, Lato, sans-serif`,
        },
      },
    },
  },
  direction: "rtl",
});
