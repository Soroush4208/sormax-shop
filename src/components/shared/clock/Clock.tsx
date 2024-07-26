import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Clock = ({ fontSize }: { fontSize: string }) => {
  const [time, setTime] = useState<Date | null>(null);
  const language = useStore((state) => state.language);

  const formatNumber = (number: number) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  const getTimeComponents = (date: Date) => {
    const hours = formatNumber(date.getHours());
    const minutes = formatNumber(date.getMinutes());
    const seconds = formatNumber(date.getSeconds());

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Initial setTime to avoid hydration mismatch
    setTime(new Date());

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return null;
  }

  const { hours, minutes, seconds } = getTimeComponents(time);

  return (
    <Box
      sx={{ fontSize: fontSize, display: "flex", alignItems: "center", gap: 1 }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "100%",
          p: 1,
          width: "40px",
          textAlign: "center",
          ":hover": { bgcolor: "red", color: "white" },
          fontWeight: "bold",
          height: "40px",
          color: "black",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            ":hover": { bgcolor: "red", color: "white" },
            fontWeight: "bold",
          }}
        >
          {seconds}
        </Typography>
      </Box>
      <Box sx={{ color: "white" }}>:</Box>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "100%",
          p: 1,
          width: "40px",
          textAlign: "center",
          ":hover": { bgcolor: "red", color: "white" },
          fontWeight: "bold",
          height: "40px",
          color: "black",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            ":hover": { bgcolor: "red", color: "white" },
            fontWeight: "bold",
          }}
        >
          {minutes}
        </Typography>
      </Box>
      <Box sx={{ color: "white" }}>:</Box>

      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "100%",
          p: 1,
          width: "40px",
          textAlign: "center",
          ":hover": { bgcolor: "red", color: "white" },
          fontWeight: "bold",
          height: "40px",
          color: "black",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            ":hover": { bgcolor: "red", color: "white" },
            fontWeight: "bold",
          }}
        >
          {hours}
        </Typography>
      </Box>
    </Box>
  );
};

export default Clock;
