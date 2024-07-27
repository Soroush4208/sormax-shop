import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import * as React from "react";
import { useTranslation } from "react-i18next";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(4),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: "black",
      color: "white",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
}

interface BreadcrumbProps {
  href: string;
  label: string;
  thirdCrumb?: {
    href: string;
    label: string;
  };
}

export default function CustomizedBreadcrumbs({
  href,
  label,
  thirdCrumb,
}: BreadcrumbProps) {
  const { t } = useTranslation();
  return (
    <Box sx={{ my: 3 }} role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label={t("header.home")}
          icon={
            <HomeIcon
              fontSize="small"
              sx={{ color: "black", ":hover": { color: "white" } }}
            />
          }
          sx={{ cursor: "pointer", width: "130px", fontWeight: "bold" }}
        />
        <StyledBreadcrumb
          component="a"
          href={href}
          label={t(`header.${label}`)}
          sx={{ cursor: "pointer", width: "100px", fontWeight: "bold" }}
        />
        {thirdCrumb && (
          <StyledBreadcrumb
            component="a"
            href={thirdCrumb.href}
            label={t(`header.${thirdCrumb.label}`)}
            icon={<ExpandMoreIcon />}
            sx={{ cursor: "pointer", width: "100px", fontWeight: "bold" }}
          />
        )}
      </Breadcrumbs>
    </Box>
  );
}
