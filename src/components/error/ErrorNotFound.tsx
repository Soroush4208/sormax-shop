import svg_error from "@/assets/image/404-errorr.png";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function ErrorPageNotFound() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath !== "/404") {
      router.replace("/404");
    }
  }, [router]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f9f5e0 0%, #e0f9f5 100%)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ position: "relative", marginTop: 250 }}
      >
        <Image src={svg_error} alt="error" width={400} height={300} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{ position: "relative" }}
      >
        <Typography
          sx={{
            fontSize: "40px",
            color: "#e5472f",
            mb: 2,
          }}
        >
          {t("error.title")}
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ position: "relative" }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "#333",
            textAlign: "center",
            mb: 4,
            lineHeight: 1.5,
          }}
        >
          {t("error.description")}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ position: "relative" }}
      >
        <Link href="/" passHref>
          <Button
            variant="text"
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              my: "40px",
              mt: "50px",
              ":hover": { background: "transparent", color: "red" },
              borderRadius: "8px",
              transition: "background 0.3s, transform 0.3s",
              padding: "10px 20px",
              gap: 2,
            }}
          >
            {t("error.button")}
            <HomeIcon fontSize="large" />
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 200 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "150px",
          height: "150px",
          background:
            "url(https://awv3node-homepage.surge.sh/build/assets/cloud.svg) no-repeat center/contain",
        }}
      />

      <motion.div
        initial={{ x: 200 }}
        animate={{ x: -200 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "200px",
          height: "200px",
          background:
            "url(https://awv3node-homepage.surge.sh/build/assets/cloud.svg) no-repeat center/contain",
        }}
      />

      <Box
        sx={{
          mt: 4,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas ref={canvasRef} width={400} height={300} />
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "50px",
          height: "50px",
          background:
            "url(https://awv3node-homepage.surge.sh/build/assets/satellite4.svg) no-repeat center/contain",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "50px",
          height: "50px",
          background:
            "url(https://awv3node-homepage.surge.sh/build/assets/satellite4.svg) no-repeat center/contain",
        }}
      />
    </Box>
  );
}

export default ErrorPageNotFound;
