import "@/i18n";
import "@/styles/globals.css";
import DynamicThemeProvider from "@/themes/ShopTheme";
import { CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
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

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <AppCacheProvider {...pageProps}>
      <DynamicThemeProvider>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <>
            {getLayout(
              <>
                <ToastContainer />
                <Component {...pageProps} />
              </>
            )}
          </>
        </QueryClientProvider>
      </DynamicThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
