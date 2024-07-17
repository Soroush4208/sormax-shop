import IRAN from "@/assets/svg/flag-for-flag-iran.svg";
import UNITED from "@/assets/svg/flag-for-flag-united-kingdom.svg";
import useStore from "@/store/useStore";
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
      <Box
        component={"img"}
        src={language === "fa" ? IRAN.src : UNITED.src}
        sx={{ width: "30px" }}
      />
      <Typography>{language === "fa" ? "فارسی" : "English"}</Typography>
    </Box>
  );
};

export default function SwitchLang() {
  const { i18n } = useTranslation();
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const handleChange = (event) => {
    const lang = event.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  };
  return (
    <Box sx={{ minWidth: 10, mx: "5px" }}>
      <FormControl variant="standard" sx={{ border: "none" }}>
        <Select
          value={language}
          onChange={handleChange}
          inputProps={{
            name: "Language",
            id: "uncontrolled-native",
          }}
          sx={{
            color: "inherit",
            border: "none",
            "& .MuiSelect-select": {
              border: "none",
              outline: "none",
            },
            "&:before, &:after": {
              border: "none",
            },
          }}
        >
          <MenuItem sx={{ outline: "none" }} value="fa">
            <FlagWrapper language="fa" isSelected={language === "fa"} />
          </MenuItem>
          <MenuItem sx={{ outline: "none" }} value="en">
            <FlagWrapper language="en" isSelected={language === "en"} />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
