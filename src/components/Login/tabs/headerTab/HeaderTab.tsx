import Logo from "@/layout/header/Logo/Logo";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
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
      {/* <SwitchTheme /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SwitchLang />
      </Box>
      <Logo />
    </Box>
  );
}

export default HeaderTab;
