import { createTheme } from "@mui/material";
import { Vazirmatn } from "@next/font/google";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const ShopTheme = createTheme({
  typography: {
    fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
        },
      },
    },
  },
  direction: "rtl",
});
