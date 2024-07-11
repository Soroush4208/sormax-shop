import IRAN from "@/assets/svg/flag-for-flag-iran.svg";
import UNITED from "@/assets/svg/flag-for-flag-united-kingdom.svg";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTranslation } from "react-i18next";

type FlagWrapperProps = {
  language: string;
  isSelected: boolean;
};

const FlagWrapper = ({ language, isSelected }: FlagWrapperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        opacity: isSelected ? 1 : 0.6,
      }}
    >
      {language === "fa" ? (
        <Box component={"img"} src={IRAN.src} sx={{ width: "30px" }} />
      ) : (
        <Box component={"img"} src={UNITED.src} sx={{ width: "30px" }} />
      )}
      <Typography>{language === "fa" ? "فارسی" : "English"}</Typography>
    </Box>
  );
};

export default function SwitchLang() {
  const { i18n } = useTranslation();

  const handleChange = (event: { target: { value: string } }) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };

  return (
    <Box sx={{ minWidth: 10 }}>
      <FormControl sx={{outline:"none"}}>
        <Select
          value={i18n.language}
          onChange={handleChange}
          inputProps={{
            name: "Language",
            id: "uncontrolled-native",
          }}
          sx={{ color: "inherit"}}
          // IconComponent={() => null}
        >
          <MenuItem sx={{outline:"none"}} value="fa">
            <FlagWrapper language="fa" isSelected={i18n.language === "fa"} />
          </MenuItem>
          <MenuItem sx={{outline:"none"}} value="en">
            <FlagWrapper language="en" isSelected={i18n.language === "en"} />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
