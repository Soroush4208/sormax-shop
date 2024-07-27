import useStore from "@/store/useStore";
import { Box } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";

function ExpensiveProducts() {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const time = moment().format("L");
  return <Box></Box>;
}

export default ExpensiveProducts;
