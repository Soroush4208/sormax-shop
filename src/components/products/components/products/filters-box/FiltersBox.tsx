import { ProductsType } from "@/components/home/hooks/type";
import useStore from "@/store/useStore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
  AccordionDetails,
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

export default function FiltersBox({
  onFilter,
  products,
}: {
  onFilter: (selected: { [key: string]: string[] }) => void;
  products: ProductsType[];
}) {
  const direction = useStore((state) => state.direction);

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [selectedFilters, setSelectedFilters] = React.useState<{
    [key: string]: string[];
  }>({});

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleFilterChange = (category: string, subcategory: string) => {
    setSelectedFilters((prev) => {
      const categoryFilters = prev[category] || [];
      const newCategoryFilters = categoryFilters.includes(subcategory)
        ? categoryFilters.filter((item) => item !== subcategory)
        : [...categoryFilters, subcategory];

      const newFilters = { ...prev, [category]: newCategoryFilters };
      onFilter(newFilters);
      return newFilters;
    });
  };

  const handleDeleteChip = (category: string, subcategory: string) => {
    setSelectedFilters((prev) => {
      const newCategoryFilters = prev[category].filter(
        (item) => item !== subcategory
      );
      const newFilters = { ...prev, [category]: newCategoryFilters };
      if (newCategoryFilters.length === 0) {
        delete newFilters[category];
      }
      onFilter(newFilters);
      return newFilters;
    });
  };

  const categories = Array.from(
    new Set(products.map((product) => product.category.name))
  );

  const subcategoriesMap = categories.reduce((acc, category) => {
    const subcategories = Array.from(
      new Set(
        products
          .filter((product) => product.category.name === category)
          .map((product) => product.subcategory.name)
      )
    );
    acc[category] = subcategories;
    return acc;
  }, {} as { [key: string]: string[] });

  return (
    <Box sx={{ p: 0, minWidth: "220px" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
        {Object.entries(selectedFilters).map(([category, subcategories]) =>
          subcategories.map((subcategory) => (
            <Chip
              color="warning"
              variant="outlined"
              key={`${category}-${subcategory}`}
              label={`${category}: ${subcategory}`}
              onDelete={() => handleDeleteChip(category, subcategory)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 2,
              }}
            />
          ))
        )}
      </Box>
      {categories.map((category) => (
        <Accordion
          key={category}
          expanded={expanded === category}
          onChange={handleChange(category)}
        >
          <AccordionSummary
            aria-controls={`${category}-content`}
            id={`${category}-header`}
          >
            <Typography>{category}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0, width: "100%" }}>
            {subcategoriesMap[category].map((subcategory) => (
              <MenuItem
                sx={{
                  p: 0,
                  ...(direction === "rtl" ? { pr: 0 } : { pl: "10px" }),
                }}
                key={subcategory}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "black",
                        "&.Mui-checked": {
                          color: "black",
                          borderRadius:"5px"
                        },
                      }}
                      checked={
                        selectedFilters[category]?.includes(subcategory) ||
                        false
                      }
                      onChange={() => handleFilterChange(category, subcategory)}
                    />
                  }
                  label={subcategory}
                />
              </MenuItem>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
