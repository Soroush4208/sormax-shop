import useStore from "@/store/useStore";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme, Theme, ThemeProvider } from "@mui/material";
import { Vazirmatn } from "@next/font/google";
import { ReactNode, useEffect } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

interface DynamicThemeFormProviderProps {
  children: ReactNode;
}

const DynamicThemeFormProvider = ({
  children,
}: DynamicThemeFormProviderProps) => {
  const direction = useStore((state) => state.direction);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const ltrCache = createCache({
    key: "mui",
  });

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <CacheProvider value={direction === "rtl" ? cacheRtl : ltrCache}>
      <ThemeProvider theme={direction === "rtl" ? rtlTheme : ltrTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
};

const rtlTheme: Theme = createTheme({
  typography: {
    fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
          direction: "rtl",
        },
      },
    },
  },
  direction: "rtl",
});

const ltrTheme: Theme = createTheme({
  typography: {
    fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: `${vazirmatn.style.fontFamily}, Vazirmatn, sans-serif`,
          direction: "ltr",
        },
      },
    },
  },
  direction: "ltr",
});

export default DynamicThemeFormProvider;
