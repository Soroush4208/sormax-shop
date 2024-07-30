import aboutUs_fa from "@/assets/image/about-us (1).jpg";
import aboutUs_en from "@/assets/image/about-us (2).jpg";
import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import {
  aboutUsCategories,
  aboutUsChoose,
  aboutUsDesc,
  teamMembers,
} from "@/constant/aboutUs";
import useStore from "@/store/useStore";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);

  const formatNumber = (number: number) => {
    const lang = language;
    return lang === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };
  return (
    <Box>
      <CustomizedBreadcrumbs href="/about-us" label="aboutUs" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // alignItems: "center",
        }}
      >
        <Box>
          {language === "fa" ? (
            <Image
              src={aboutUs_fa}
              alt="About Us"
              layout="responsive"
              width={500}
              height={500}
            />
          ) : (
            <Image
              src={aboutUs_en}
              alt="About Us"
              layout="responsive"
              width={500}
              height={500}
            />
          )}
        </Box>
        <Box sx={{ mt: 4, mx: "auto" }}>
          {aboutUsDesc?.map((item) => (
            <Box key={item.id} sx={{ mb: 2, textAlign: "justify" }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: 1 }}>
                {t(`${item.title}`)}
              </Typography>
              <Typography>{t(`${item.desc}`)}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "column",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: 2 }}>
            {t("about_us.aboutUsCategories.title")}
          </Typography>
          {aboutUsCategories?.map((item, index) => (
            <>
              <Typography sx={{ mb: "5px" }}>
                <b>
                  {formatNumber(index + 1)} - {t(`${item.title}`)}
                </b>
                {t(`${item.desc}`)}
              </Typography>
            </>
          ))}
        </Box>
        <Box
          sx={{
            my: 1,
            display: "flex",
            flexDirection: "column",
            mb: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: 2 }}>
            {t("about_us.aboutUsChoose.title")}
          </Typography>
          {aboutUsChoose?.map((item, index) => (
            <>
              <Typography sx={{ mb: "5px" }}>
                <b>
                  {formatNumber(index + 1)} : {t(`${item.title}`)}
                </b>{" "}
                {t(`${item.desc}`)}
              </Typography>
            </>
          ))}
        </Box>
        <Box sx={{ mb: 5 }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px", mb: 2 }}>
            {t("about_us.teamMembers.titles.title")}
          </Typography>
          {teamMembers?.map((item) => (
            <Accordion key={item.id} sx={{ my: 1, width: "100%", mx: "auto" }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                  {t(`${item.title}`)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "self-start",
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pl: 4 }}
                  >
                    {t("about_us.teamMembers.titles.name")} :{t(`${item.Name}`)}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pl: 4 }}
                  >
                    {t("about_us.teamMembers.titles.surname")} :
                    {t(`${item.Surname}`)}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pl: 4 }}
                  >
                    {t("about_us.teamMembers.titles.birthplace")} :
                    {t(`${item.Birthplace}`)}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pl: 4 }}
                  >
                    {t("about_us.teamMembers.titles.residence")} :
                    {t(`${item.Residence}`)}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "18px", pl: 4 }}
                  >
                    {t("about_us.teamMembers.titles.education")} :
                    {t(`${item.Education}`)}
                  </Typography>
                </Box>
                <Box
                  component="img"
                  src={item.img.src}
                  sx={{
                    width: "20%",
                    borderRadius: "100%",
                    border: "solid gray 1px",
                    p: 1,
                  }}
                ></Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
