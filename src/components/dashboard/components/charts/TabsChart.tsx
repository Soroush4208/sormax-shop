import { Box, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import AreaChartComponent from "./chart-area/ChartArea";
import PieChartComponent from "./charts-pie/Chart";
import FirstTab from "./first-tab/FirstTab";

const AnimatedTab = styled(Tab)(() => ({
  transition: "all 0.3s ease",
  color: "white",
  "&:hover": {
    backgroundColor: "gray",
  },
  "&.Mui-selected": {
    backgroundColor: "white",
    color: "black",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "white",
    color: "red",
  },
  "&.Mui-selected.Mui-focusVisible": {
    backgroundColor: "white",
    color: "black",
  },
}));

function TabCharts() {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "800px" }}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="animated vertical tabs"
        sx={{
          borderColor: "divider",
          width: 210,
          bgcolor: "black",
          borderRadius: "10px 10px 0 0",
          color: "white",
        }}
      >
        <AnimatedTab
          label={
            <>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                  py: 1,
                }}
              >
                {t("dashboard.tabCharts")}
              </Typography>
            </>
          }
          sx={{ backgroundColor: "black", color: "white" }}
        />
        <AnimatedTab label="Tab 1" />
        <AnimatedTab label="Tab 2" />
        <AnimatedTab label="Tab 3" />
      </Tabs>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        {value === 0 && (
          <Typography>
            <FirstTab />
          </Typography>
        )}
        {value === 1 && (
          <Typography>
            <PieChartComponent />
          </Typography>
        )}
        {value === 2 && (
          <Typography>
            <AreaChartComponent />
          </Typography>
        )}
        {value === 3 && <Typography>Content for Tab 3</Typography>}
      </Box>
    </Box>
  );
}

export default TabCharts;
