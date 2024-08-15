import CustomizedBreadcrumbs from "@/components/shared/breadcrumbs/Breadcrumbs";
import DynamicThemeFormProvider from "@/themes/DynamicThemeFormProvider";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <Box marginBottom={18}>
      <CustomizedBreadcrumbs href="/" label={t("contactUs")} />
      <Box
        width="794px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        marginY={5}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ width: "48px", height: "48px" }}
                  color="primary"
                />
                <Typography fontSize="20px" fontWeight="medium">
                  {t("contact_us.info.office")}
                </Typography>
                <Typography
                  fontSize="15px"
                  fontWeight="light"
                  color="#717171"
                  width="133px"
                  textAlign="center"
                >
                  Tehran, Iran
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EmailOutlinedIcon
                  sx={{ width: "48px", height: "48px" }}
                  color="primary"
                />
                <Typography fontSize="20px" fontWeight="medium">
                  {t("contact_us.info.email")}
                </Typography>
                <Typography fontSize="15px" fontWeight="light" color="#717171">
                  SormaxSupport@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: "none",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CallOutlinedIcon
                  sx={{ width: "48px", height: "48px" }}
                  color="primary"
                />
                <Typography fontSize="20px" fontWeight="medium">
                  {t("contact_us.info.phone")}
                </Typography>
                <Typography fontSize="15px" fontWeight="light" color="#717171">
                  +989399449478
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" gap={10} justifyContent="center">
        <Box width="470px">
          <Typography fontSize="24px" fontWeight="medium" marginBottom={3}>
            {t("contact_us.title")}
          </Typography>
          <Typography
            fontSize="20px"
            fontWeight="light"
            color="#717171"
            textAlign="justify"
          >
            {t("contact_us.desc")}
          </Typography>
        </Box>
        <DynamicThemeFormProvider>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            gap={2}
            width="392px"
          >
            <TextField
              id="outlined-basic"
              label={t("contact_us.inputs_name")}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={t("contact_us.inputs_email")}
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label={t("contact_us.inputs_message")}
              multiline
              rows={7}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                fontWeight: "normal",
                fontSize: "16px",
                textTransform: "none",
                width: "184px",
                paddingX: "16px",
                paddingY: "8px",
                alignSelf: "flex-end",
              }}
            >
              {t("contact_us.button")}
            </Button>
          </Box>
        </DynamicThemeFormProvider>
      </Box>
    </Box>
  );
}
