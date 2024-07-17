import IMAGE_FOOTER from "@/assets/svg/Frame 53.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        bgcolor: "#e4e4e4",
        width: "100%",
        color: "black",
        py: "10px",
        px: "20px",
        mt: "50px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", gap: "10px" },
          borderBottom: "solid 1px #a9a9a9",
          pb: "10px",
          mb: "10px",
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "30px", textAlign: "justify" }}
          >
            {t("header.name")}
          </Typography>
          <Typography>{t("footer.Description")}</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <InstagramIcon />
          <GitHubIcon />
          <TwitterIcon />
          <GoogleIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  {t("footer.company.title")}
                </Typography>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.company.About")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.company.features")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.company.works")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.company.career")}
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  {t("footer.help.title")}
                </Typography>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.help.customer_support")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.help.delivery_details")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.help.terms_conditions")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.help.privacy_policy")}
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  {t("footer.faq.title")}
                </Typography>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.faq.account")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.faq.manege_deliveries")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.faq.orders")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.faq.payment")}
                  </Typography>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  gap: "5px",
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  {t("footer.resources.title")}
                </Typography>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.resources.free_eBook")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.resources.development_tutorial")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.resources.how_to_blog")}
                  </Typography>
                </Link>
                <Link href={"/"} sx={{ textDecoration: "none" }}>
                  <Typography sx={{ color: "black", textDecoration: "none" }}>
                    {t("footer.resources.youtube_playlist")}
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1400px",
          mx: "auto",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>{t("footer.Additional_explanations")}</Typography>
        <Image
          src={IMAGE_FOOTER.src}
          alt="image footer"
          width={200}
          height={500}
        />
      </Box>
    </Box>
  );
}

export default Footer;
