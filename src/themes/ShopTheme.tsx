import useStore from "@/store/useStore";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
import { Vazirmatn } from "@next/font/google";
import { ReactNode, useEffect } from "react";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

interface DynamicThemeProviderProps {
  children: ReactNode;
}

const DynamicThemeProvider = ({ children }: DynamicThemeProviderProps) => {
  const direction = useStore((state) => state.direction);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  const theme: Theme = createTheme({
    typography: {
      fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
            direction: direction,
          },
        },
      },
    },
    direction: direction,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DynamicThemeProvider;
