import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import { emphasize, styled } from "@mui/material/styles";
import Link from "next/link";
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

interface BreadcrumbProps {
  href: string;
  label: string;
  thirdCrumbLabel?: string;
}

export default function CustomizedBreadcrumbs({
  href,
  label,
  thirdCrumbLabel,
}: BreadcrumbProps) {
  const { t } = useTranslation();

  return (
    <Box sx={{ my: 3 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
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
          component={Link}
          href={href}
          label={t(`header.${label}`)}
          sx={{ cursor: "pointer", width: "100px", fontWeight: "bold" }}
        />
        {thirdCrumbLabel && (
          <StyledBreadcrumb
            component={Link}
            href="#"
            label={thirdCrumbLabel}
            sx={{ cursor: "pointer", width: "100%", fontWeight: "bold" }}
          />
        )}
      </Breadcrumbs>
    </Box>
  );
}
