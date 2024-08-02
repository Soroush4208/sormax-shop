import IMAGE_CHART from "@/assets/image/396849-PCQADT-5.jpg";
import { Box } from "@mui/material";
function FirstTab() {
  return (
    <Box>
      <Box
        component="img"
        src={IMAGE_CHART.src}
        alt="IMAGE_CHART"
        sx={{ width: "100%", height: "700px" }}
      />
    </Box>
  );
}

export default FirstTab;
