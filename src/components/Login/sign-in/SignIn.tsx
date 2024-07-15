import { IPropsSignIn } from "@/types/types";
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
import { t } from "i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSignInUser } from "../hooks";
import { setAccessCookie, setIdCookie, setRoleCookie } from "../services";
import FooterTabs from "../tabs/footerTabs/FooterTabs";
function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPropsSignIn>();
  const [typeTextField, setTypeTextField] = useState("password");
  const { mutate } = useSignInUser();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit: SubmitHandler<IPropsSignIn> = (formData) => {
    mutate(formData, {
      onSuccess: (response) => {
        setIdCookie(response.data.user._id);
        setAccessCookie(true);
        setRoleCookie(response.data.user.role);
        toast.success(
          `${t("welcome.hi")} ${response.data.user.username},${t(
            "welcome.welcome_back"
          )}`
        );
        setTimeout(() => {
          router.push("/");
        }, 1500);
        reset();
      },
      onError: (error) => {
        console.error("Sign-in failed:", error.message);
        setErrorMessage(`Signup failed: ${error.message}`);
      },
    });
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
          height: "100%",
        }}
      >
        <Grid container spacing={2} sx={{ height: "100%" }}>
          <Grid item xs={12}>
            <TextField
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
          <Grid item xs={12}>
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
        </Grid>
        <Grid container spacing={2} sx={{ mt: "5px" }}>
          <Grid item xs={12}>
            <Button type="submit" sx={{ fontSize: "18px" }}>
              {t("sign_in.ForgotPassword")}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: "5px" }}>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox inputProps={{ "aria-label": "controlled" }} />
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
              {t("sign_up.keep")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: "20px" }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "red",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: "10px" }}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, py: "10px" }}
              type="submit"
            >
              {t("sign_in.Button", { defaultValue: "Sign Up" })}
            </Button>
          </Grid>
        </Grid>
        <FooterTabs text="sign_in.orSign_in" />
      </Box>
    </form>
  );
}

export default SignIn;
