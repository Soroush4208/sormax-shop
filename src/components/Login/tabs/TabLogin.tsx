import SignIn from "@/components/Login/sign-in/SignIn";
import SignUp from "@/components/Login/sign-up/SignUp";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
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

export default function TabLogin() {
  const router = useRouter();
  const { t } = useTranslation();

  const isSignUp = true;
  const initialTab = isSignUp ? 1 : 0;
  const [value, setValue] = useState(initialTab);

  useEffect(() => {
    setValue(initialTab);
  }, [initialTab]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    router.push({ query: { sign_in: newValue === 0 } });
  };

  return (
    <Box sx={{ width: "100%",}}>
      <Box sx={{}}>
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
            label={t("sign_in.title")}
            {...a11yProps(0)}
            sx={{ flexGrow: 1, textAlign: "center",fontSize:"30px" }}
          />
          <Tab
            label={t("sign_up.title")}
            {...a11yProps(1)}
            sx={{ flexGrow: 1, textAlign: "center",fontSize:"30px" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SignIn />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SignUp />
      </CustomTabPanel>
    </Box>
  );
}
