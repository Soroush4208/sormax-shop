import { useGetUserInfo } from "@/components/account/hooks/index";
import Loading from "@/components/shared/loading/Loading";
import useStore from "@/store/useStore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

const ProfileContainer = styled(Paper)(({ theme }) => ({
  padding: "30px",
  width: "200%",
  height: "150%",
  borderRadius: "20px",
  background: `linear-gradient(135deg, black 0%, gray 100%)`,
  color: "white",
  position: "relative",
  overflow: "hidden",
  textAlign: "center",
}));

const AvatarLarge = styled(Avatar)(({ theme }) => ({
  width: "120px",
  height: "120px",
  border: `4px solid ${"white"}`,
  marginBottom: theme.spacing(2),
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "white",
  justifyContent: "flex-start",
  width: "100%",
  textAlign: "left",
  paddingLeft: theme.spacing(1),
}));

const BackgroundBlob = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "250px",
  height: "250px",
  background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 70%)`,
  borderRadius: "50%",
  top: "-80px",
  right: "-80px",
  zIndex: 0,
}));

function UserInfoAccount() {
  const { data: user, isLoading, error } = useGetUserInfo();
  const language = useStore((state) => state.language);
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loading />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography color="error">Error loading user information.</Typography>
      </Box>
    );
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat(language === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };
  const date = new Date();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 4,
        borderRadius: "20px",
        width: { xs: "100%", md: "70%" },
        height: { xs: "70%", md: "60%" },
        mt: { xs: 10, md: 0 },
      }}
    >
      <ProfileContainer>
        <BackgroundBlob />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <AvatarLarge
            alt={user.name}
            src={user.avatarUrl || "/default-avatar.png"}
          />
          <Typography variant="h4" sx={{ fontWeight: "bold", zIndex: 1 }}>
            {user.username}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 3, zIndex: 1, opacity: 0.9 }}>
          {user.email}
        </Typography>
        <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.3)", zIndex: 1 }} />
        <Box
          sx={{
            zIndex: 1,
            mt: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <IconButtonStyled disableRipple>
            <EmailIcon
              fontSize="large"
              sx={{
                mr: language === "fa" ? 0 : 3,
                ml: language === "fa" ? 3 : 0,
              }}
            />
            <Typography variant="h5" sx={{ opacity: 0.8 }}>
              {user.username}
            </Typography>
          </IconButtonStyled>
          <IconButtonStyled disableRipple>
            <PhoneIcon
              fontSize="large"
              sx={{
                mr: language === "fa" ? 0 : 3,
                ml: language === "fa" ? 3 : 0,
              }}
            />
            <Typography variant="h5" sx={{ opacity: 0.8 }}>
              {user.phoneNumber || "Not provided"}
            </Typography>
          </IconButtonStyled>
          <IconButtonStyled disableRipple>
            <LocationOnIcon
              fontSize="large"
              sx={{
                mr: language === "fa" ? 0 : 3,
                ml: language === "fa" ? 3 : 0,
              }}
            />
            <Typography variant="h5" sx={{ opacity: 0.8 }}>
              {user.address || "Not provided"}
            </Typography>
          </IconButtonStyled>
          <IconButtonStyled disableRipple>
            <AccessTimeIcon
              fontSize="large"
              sx={{
                mr: language === "fa" ? 0 : 3,
                ml: language === "fa" ? 3 : 0,
              }}
            />
            <Typography variant="h5" sx={{ opacity: 0.8 }}>
              {formatDate(date)}
            </Typography>
          </IconButtonStyled>
        </Box>
      </ProfileContainer>
    </Box>
  );
}

export default UserInfoAccount;
