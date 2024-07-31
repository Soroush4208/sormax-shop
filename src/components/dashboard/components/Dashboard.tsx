import TabCharts from "@/components/dashboard/components/charts/TabsChart";

import TableOrders from "@/components/dashboard/components/table-orders/TableOrders";
import TableProduct from "@/components/dashboard/components/table-products/TableProduct";
import TableAllUsers from "@/components/dashboard/components/tablea-all-users/TableUsers";
import TableQuantity from "@/components/dashboard/components/tableq-quantity/TableQuantity";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Dashboard() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", py: 2, overflow: "hidden", height: "935px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tab
              label={t("dashboard.tabProducts")}
              {...a11yProps(0)}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: { xs: "16px", md: "20px" },
                gap: "10px",
              }}
              icon={<StorefrontIcon />}
              iconPosition="start"
            />
            <Tab
              label={t("dashboard.tabQuantity")}
              {...a11yProps(1)}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: { xs: "16px", md: "20px" },
                gap: "10px",
              }}
              icon={<ProductionQuantityLimitsIcon />}
              iconPosition="start"
            />
            <Tab
              label={t("dashboard.tabCharts")}
              {...a11yProps(2)}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: { xs: "16px", md: "20px" },
                gap: "10px",
              }}
              icon={<QueryStatsIcon />}
              iconPosition="start"
            />
            <Tab
              label={t("dashboard.tabOrders")}
              {...a11yProps(3)}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: { xs: "16px", md: "20px" },
                gap: "10px",
              }}
              icon={<LocalGroceryStoreIcon />}
              iconPosition="start"
            />
            <Tab
              label={t("dashboard.tabUsers")}
              {...a11yProps(4)}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontSize: { xs: "16px", md: "20px" },
                gap: "10px",
              }}
              icon={<PermContactCalendarIcon />}
              iconPosition="start"
            />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <CustomTabPanel value={value} index={0}>
            <TableProduct />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TableQuantity />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <TabCharts />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <TableOrders />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <TableAllUsers />
          </CustomTabPanel>
        </Grid>
      </Grid>
    </Box>
  );
}
