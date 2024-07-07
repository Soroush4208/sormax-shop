import en from "@/i18n/locales-en/en";
import fa from "@/i18n/locales-fa/fa";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function SwitchLang() {
  return (
    <Box sx={{ minWidth: 10, border: "none" }}>
      <FormControl sx={{ border: "none", color: "white" }}>
        <NativeSelect
          defaultValue={fa}
          inputProps={{
            name: "Language",
            id: "uncontrolled-native",
          }}
          sx={{ color: "inherit" }}
        >
          <option className="option-switch" value={fa}>
            Fa
          </option>
          <option className="option-switch" value={en}>
            En
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
