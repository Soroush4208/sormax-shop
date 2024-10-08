import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SearchBox({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSearch}
        sx={{
          p: "4px 15px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "10px",
          my: 3,
          border: "1px solid #e9e9e9",
          color: "black",
          boxShadow: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={t("products.search")}
          inputProps={{ "aria-label": "search google maps" }}
          value={searchTerm}
          onChange={handleInputChange}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Typography
        sx={{ mb: 2, fontSize: "18px", fontWeight: "bold", color: "#a6a2a2" }}
      >
        {t("products.desc")}
      </Typography>
    </>
  );
}
