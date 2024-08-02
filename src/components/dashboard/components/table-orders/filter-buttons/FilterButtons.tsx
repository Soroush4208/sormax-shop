import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import { Button, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface FilterButtonsProps {
  filter: "all" | "delivered" | "pending";
  onFilterChange: (filter: "all" | "delivered" | "pending") => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filter,
  onFilterChange,
}) => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      sx={{
        marginBottom: 2,
        display: "flex",
        justifyContent:"space-between"
      }}
    >
      <Grid item xs={12} sm={4} md={3.8}>
        <Button
          sx={{ gap: 2 }}
          color="warning"
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => onFilterChange("all")}
          fullWidth
        >
          <DensitySmallIcon />
          {t("dashboard.orders.all")}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} md={3.8}>
        <Button
          sx={{ gap: 2 }}
          color="warning"
          variant={filter === "delivered" ? "contained" : "outlined"}
          onClick={() => onFilterChange("delivered")}
          fullWidth
        >
          <DeliveryDiningIcon />
          {t("dashboard.orders.delivered")}
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} md={3.8}>
        <Button
          sx={{ gap: 2 }}
          color="warning"
          variant={filter === "pending" ? "contained" : "outlined"}
          onClick={() => onFilterChange("pending")}
          fullWidth
        >
          <PendingActionsIcon />
          {t("dashboard.orders.pending")}
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterButtons;
