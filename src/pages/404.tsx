import ErrorPageNotFound from "@/components/error/ErrorNotFound";
import ErrorLayout from "@/layout/ErrorLayout";
import { NextPageWithLayout } from "@/pages/_app";

const ErrorPage: NextPageWithLayout = () => {
  return <ErrorPageNotFound />;
};

ErrorPage.getLayout = function getLayout(page) {
  return <ErrorLayout>{page}</ErrorLayout>;
};

export default ErrorPage;
