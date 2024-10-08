import { useSignInUser } from "@/components/login/hooks/index";
import {
  getRoleCookie,
  setAccessCookie,
  setIdCookie,
  setRoleCookie,
  setUserName,
} from "@/components/login/services/index";
import FooterTabs from "@/components/login/tabs/footerTabs/FooterTabs";
import useStore from "@/store/useStore";
import { IPropsSignIn } from "@/types/types";
import { setAccessTokenCookie, setRefreshTokenCookie } from "@/utils";
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

function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IPropsSignIn>();
  const direction = useStore((state) => state.direction);

  const [typeTextField, setTypeTextField] = useState("password");
  const { mutate } = useSignInUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<IPropsSignIn> = (formData) => {
    mutate(formData, {
      onSuccess: (response) => {
        setIdCookie(response.data.user._id);
        setAccessCookie(true);
        setRoleCookie(response.data.user.role);
        setUserName(response.data.user.username);
        setAccessTokenCookie(response.token.accessToken);
        setRefreshTokenCookie(response.token.refreshToken);
        toast.success(
          `${t("welcome.hi")} ${response.data.user.username},${t(
            "welcome.welcome_back"
          )}`
        );
        if (getRoleCookie() === "ADMIN") {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
        reset();
      },
      onError: (error) => {
        console.error("Sign-in failed:", error.message);
        toast.error(`Signup failed: ${error.message}`);
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
              dir={direction}
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
            <Button type="button" sx={{ fontSize: "18px" }}>
              <p>{t("sign_in.ForgotPassword")}</p>
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
        <Grid container spacing={1} sx={{ mt: "10px" }}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, py: "10px" }}
              type="submit"
            >
              <Typography>
                {t("sign_in.Button", { defaultValue: "Sign Up" })}
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <FooterTabs text="sign_in.orSign_in" />
      </Box>
    </form>
  );
}

export default SignIn;
