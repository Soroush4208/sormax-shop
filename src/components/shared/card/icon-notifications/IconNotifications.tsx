import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Checkbox } from "@mui/material";

function IconNotifications() {
  return (
    <Checkbox
      icon={
        <NotificationsActiveIcon fontSize="large" sx={{ color: "white" }} />
      }
      checkedIcon={
        <NotificationsActiveIcon fontSize="large" sx={{ color: "yellow" }} />
      }
      name="checkedH"
    />
  );
}

export default IconNotifications;
