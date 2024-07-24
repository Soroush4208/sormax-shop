import Logo from "@/layout/header/Logo/Logo";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import SwitchTheme from "@/layout/header/SwitchTheme/SwitchTheme";
import { Box } from "@mui/material";

function HeaderTab() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: "8px",
      }}
    >
      <SwitchTheme />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SwitchLang />
        <Logo />
      </Box>
    </Box>
  );
}

export default HeaderTab;
