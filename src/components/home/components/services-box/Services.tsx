import IMAGE_SERVICES2 from "@/assets/svg/Services-1.svg";
import IMAGE_SERVICES3 from "@/assets/svg/Services-2.svg";
import IMAGE_SERVICES1 from "@/assets/svg/Services-3.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          src={IMAGE_SERVICES1}
          alt="IMAGE_SERVICES"
          width={100}
          height={100}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {t("home.services.services_1.title")}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {t("home.services.services_1.desc")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          src={IMAGE_SERVICES2}
          alt="IMAGE_SERVICES"
          width={100}
          height={100}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {t("home.services.services_2.title")}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {t("home.services.services_2.desc")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Image
          src={IMAGE_SERVICES3}
          alt="IMAGE_SERVICES"
          width={100}
          height={100}
        />
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          {t("home.services.services_3.title")}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {t("home.services.services_3.desc")}
        </Typography>
      </Box>
    </Box>
  );
}

export default Services;
