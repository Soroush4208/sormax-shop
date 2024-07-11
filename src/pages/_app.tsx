import LoadingShop from "@/components/shared/loadingShop/loadingShop";
import "@/i18n";
import "@/styles/globals.css";
import { ShopTheme } from "@/themes/ShopTheme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [initialLoading, setInitialLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const isInitialLoad = localStorage.getItem("initialLoad") !== "false";

    if (isInitialLoad) {
      setInitialLoading(true);
      setTimeout(() => {
        setInitialLoading(false);
        localStorage.setItem("initialLoad", "false");
      }, 4000);
    } else {
      setInitialLoading(false);
    }
  }, []);

  if (initialLoading === null) {
    return null;
  }

  return (
    <ThemeProvider theme={ShopTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {initialLoading ? (
          <LoadingShop />
        ) : (
          <>
            {getLayout(
              <>
                <ToastContainer />
                <Component {...pageProps} />
              </>
            )}
          </>
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
