import { useGetUserInfo } from "@/components/checkout/hooks/index";
import useShipmentCostStore from "@/store/useShipmentCostStore";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const options = [
  {
    label: {
      title: "checkout.user_info.free",
      desc: "checkout.user_info.desc",
      day: 10,
    },
    price: 0,
    value: 0,
  },
  {
    label: {
      title: "checkout.user_info.regular",
      desc: "checkout.user_info.desc",
      day: 5,
    },
    price: 20000,
    value: 20000,
  },
  {
    label: {
      title: "checkout.user_info.express",
      desc: "checkout.user_info.desc",
      day: 1,
    },
    price: 50000,
    value: 50000,
  },
];

const UserInfo: React.FC = () => {
  const { shipmentCost, shipmentDays, setShipmentCost, setShipmentDays } =
    useShipmentCostStore();
  const { data: usersInfo } = useGetUserInfo();
  const { t } = useTranslation();
  const language = useStore((state) => state.language);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = Number((event.target as HTMLInputElement).value);
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );

    if (selectedOption) {
      setShipmentDays(selectedOption.label.day);
    }
    if (selectedOption) {
      setShipmentCost(selectedOption.value);
    }
  };

  return (
    <Stack direction={"column"}>
      <Card sx={{ height: "507px" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" mb={0.5}>
                {t("checkout.user_info.user")}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#F6F6F6",
                  pl: 1.5,
                  pr: 1.5,
                  py: 2,
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "300",
                }}
                width={"full"}
              >
                {usersInfo?.username}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" mb={0.5}>
                {t("checkout.user_info.ship")}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#F6F6F6",
                  px: 1.5,
                  py: 2,
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "300",
                }}
                width={"full"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                {usersInfo ? usersInfo.address : "address"}
                <BorderColorIcon />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" mb={0.5}>
                {t("checkout.user_info.ship_method")}
              </Typography>
              <FormControl component="fieldset" fullWidth>
                <RadioGroup value={shipmentCost} onChange={handleChange}>
                  {options.map((option) => (
                    <Box
                      key={option.value}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor:
                          shipmentCost === option.value ? "#e5eeff" : "#F6F6F6",
                        padding: 1,
                        marginBottom: 1,
                        borderRadius: "8px",
                        border:
                          shipmentCost === option.value
                            ? "1px solid #78ABF9"
                            : "#F6F6F6",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormControlLabel
                          value={option.value}
                          control={<Radio sx={{ marginTop: -2 }} />}
                          label={
                            <Box>
                              <Typography variant="body1">
                                {t(`${option.label.title}`)}
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1,
                                }}
                              >
                                <Typography
                                  variant="body2"
                                  color={"#505050"}
                                  sx={{ display: "flex", gap: 2 }}
                                >
                                  {formatNumber(option.label.day, language)}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color={"#505050"}
                                  sx={{ display: "flex", gap: 2 }}
                                >
                                  {t(`${option.label.desc}`)}
                                </Typography>
                              </Box>
                            </Box>
                          }
                        />
                        <Typography variant="body2" color={"#505050"}>
                          {formatNumber(option.price, language)}
                          {language === "fa" ? <> هزار تومان </> : <> $ </>}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Link href={"/cart"}>
        <Typography
          sx={{
            my: 3,
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "end",
            color: "black",
          }}
        >
          {t("checkout.user_info.button")}
        </Typography>
      </Link>
    </Stack>
  );
};
export default UserInfo;
