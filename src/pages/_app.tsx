import LoadingShop from "@/components/shared/loadingShop/loadingShop";
import "@/i18n";
import "@/styles/globals.css";
import { ShopTheme } from "@/themes/ShopTheme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  initialLoading: boolean;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps, initialLoading }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [isInitialLoading, setIsInitialLoading] = useState(initialLoading);

  useEffect(() => {
    if (isInitialLoading) {
      setTimeout(() => {
        setIsInitialLoading(false);
        Cookies.set("initialLoad", "false", { expires: 1 });
      }, 3000);
    }
  }, [isInitialLoading]);

  return (
    <ThemeProvider theme={ShopTheme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        {isInitialLoading ? (
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
};

App.getInitialProps = async (appContext: AppContext) => {
  const isInitialLoad = appContext.ctx.req
    ? !appContext.ctx.req.headers.cookie?.includes("initialLoad=false")
    : true;

  if (isInitialLoad && appContext.ctx.res) {
    appContext.ctx.res.setHeader("Set-Cookie", "initialLoad=false; path=/");
  }

  return {
    initialLoading: isInitialLoad,
  };
};

export default App;
