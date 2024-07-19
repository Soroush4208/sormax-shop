import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import React from "react";
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: theme.spacing(0, theme.direction === "rtl" ? "0 2 0 3" : "0 3 0 2"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  display: "flex",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight:
      theme.direction === "rtl" ? `calc(1em + ${theme.spacing(4)})` : undefined,
    paddingLeft:
      theme.direction === "ltr" ? `calc(1em + ${theme.spacing(4)})` : undefined,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Search>
      <StyledInputBase
        placeholder={`${t("Search")} …`}
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchBar;
