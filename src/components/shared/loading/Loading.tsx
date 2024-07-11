import Logo from "@/assets/image/Sormax_Logo.png";
import { Box } from "@mui/material";

function Loading() {
  return (
    <Box>
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-b-red-500 border-t-blue-300"></div>
        <img src={Logo.src} className="rounded-full h-10 w-10 " />
      </div>
    </Box>
  );
}

export default Loading;
