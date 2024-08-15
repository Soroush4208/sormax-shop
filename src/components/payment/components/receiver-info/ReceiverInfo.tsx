import SHMAN from "@/assets/image/saman-bank.png";
import useCartStore from "@/store/useCartStore";
import useShipmentCostStore from "@/store/useShipmentCostStore";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function ReceiverInfo() {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const total = useCartStore((state) => state.total);
  const shipmentCost = useShipmentCostStore((state) => state.shipmentCost);
  const totalPayment = total + shipmentCost;

  return (
    <Box
      sx={{ width: "100%", height: "700px", backgroundColor: "#f2f2f2", p: 2 }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <InfoIcon />
        <Typography>{t("payment.receiver_info.title")}</Typography>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Image src={SHMAN} alt="logo-" width={600} height={600} />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            py: 1,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PersonIcon />
            <Typography>
              {t("payment.receiver_info.name_of_recipient.title")} :
            </Typography>
          </Box>
          <Typography>
            {t("payment.receiver_info.name_of_recipient.desc")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            py: 1,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PublicIcon />
            <Typography>
              {t("payment.receiver_info.address_receiving_site.title")} :
            </Typography>
          </Box>
          <Typography>
            {t("payment.receiver_info.address_receiving_site.desc")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            py: 1,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CheckCircleOutlineIcon />
            <Typography>
              {t("payment.receiver_info.receiving_code")} :
            </Typography>
          </Box>
          <Typography>109356553</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 5,
            py: 1,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <MonetizationOnIcon />
            <Box>{t("payment.receiver_info.amount_payable")} :</Box>
          </Box>
          <Box>
            {formatNumber(totalPayment, language)}
            {language === "fa" ? <> تومان </> : <>$</>}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReceiverInfo;
