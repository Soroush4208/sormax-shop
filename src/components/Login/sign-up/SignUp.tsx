import {
  setAccessCookie,
  setRoleCookie,
} from "@/components/Login/services/index";
import { UserTypeSignUp } from "@/types/types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import FooterTabs from "../footerTabs/FooterTabs";
import { usePostData } from "../hooks";
import ModalLTerms from "../tabs/modalTerms/ModalLTerms";

function SignUp() {
  const { mutate } = usePostData();
  const router = useRouter();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserTypeSignUp>();
  const [errorMessage, setErrorMessage] = useState("");
  const [typeTextField, setTypeTextField] = useState("password");

  const onSubmit = (formData: UserTypeSignUp) => {
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      username: formData.username,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
    };

    mutate(data, {
      onSuccess: (response) => {
        if (response.message === "User already exists") {
          toast.warning(response.message);
          setAccessCookie(true);
          setRoleCookie(response.data.user.role);
          console.log(response.data.user.role);
        } else {
          toast.success(`${t("welcome.welcome")}`);
          setAccessCookie(true);
          setRoleCookie(response.data.user.role);
          setTimeout(() => {
            router.push("/");
          }, 1500);
          reset();
        }
      },
      onError: (error: any) => {
        const message = error.response?.data?.message || "Signup failed";
        setErrorMessage(`Signup failed: ${message}`);
        console.error(error);
      },
    });
    console.log(data);
  };

  const handleChangeType = () => {
    setTypeTextField((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Grid container spacing={2} sx={{ my: "5px" }}>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ borderRadius: "50px", direction: "rtl" }} // direction: "rtl" for right-to-left
              fullWidth
              label={t("sign_up.firstname")}
              variant="outlined"
              {...register("firstname", {
                required: t("sign_up.error.firstname"),
              })}
              error={!!errors.firstname}
              helperText={errors.firstname?.message?.toString()}
              InputLabelProps={{
                style: {
                  textAlign: "left",
                  direction: "ltr",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ borderRadius: "50px" }}
              fullWidth
              label={t("sign_up.lastname")}
              variant="outlined"
              {...register("lastname", {
                required: t("sign_up.error.lastname"),
              })}
              error={!!errors.lastname}
              helperText={errors.lastname?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ borderRadius: "50px" }}
              fullWidth
              label={t("sign_up.username")}
              variant="outlined"
              {...register("username", {
                required: t("sign_up.error.username"),
              })}
              error={!!errors.username}
              helperText={errors.username?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              dir="ltr"
              label={t("sign_up.password")}
              variant="outlined"
              {...register("password", {
                required: t("sign_up.error.password"),
              })}
              error={!!errors.password}
              helperText={errors.password?.message?.toString()}
              type={typeTextField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button onClick={handleChangeType} color="inherit">
                      {typeTextField === "password" ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ borderRadius: "50px" }}
              fullWidth
              label={t("sign_up.phoneNumber")}
              variant="outlined"
              type="number"
              {...register("phoneNumber", {
                required: t("sign_up.error.phoneNumber"),
                pattern: {
                  value: /^(?:\d{11})$/,
                  message: t("sign_up.error.phoneNumberInvalid"),
                },
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message?.toString()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              sx={{ borderRadius: "50px" }}
              fullWidth
              label={t("sign_up.address")}
              variant="outlined"
              {...register("address", {
                required: t("sign_up.error.address"),
              })}
              error={!!errors.address}
              helperText={errors.address?.message?.toString()}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: "5px" }}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              {...register("termsAccepted", {
                required: t("sign_up.error.termsAccepted"),
              })}
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              {t("sign_up.check.title")}
            </Typography>
            <ModalLTerms />
            {errors.termsAccepted && (
              <Typography sx={{ color: "red", ml: 2 }}>
                {errors.termsAccepted.message?.toString()}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{ color: "red", fontSize: "18px", fontWeight: "bold" }}
            >
              {errorMessage}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, py: "10px" }}
              type="submit"
            >
              {t("sign_up.Button", { defaultValue: "Sign Up" })}
            </Button>
          </Grid>
        </Grid>
        <FooterTabs text="sign_up.orSign_up" />
      </Box>
    </form>
  );
}

export default SignUp;
