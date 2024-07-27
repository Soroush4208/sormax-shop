import LoadingShop from "@/components/shared/loadingShop/loadingShop";
import { ReactNode, useEffect, useState } from "react";

const LayoutLoading = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingShop />;
  }

  return <>{children}</>;
};

export default LayoutLoading;
