import TabLogin from "@/components/login/tabs/TabLogin";
import Box from "@mui/material/Box";
import Head from "next/head";

function Login() {
  return (
    <>
      <Head>
        <title>𝑺𝒐𝒓𝒎𝒂𝒙</title>
      </Head>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(to bottom right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/background.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "70%", md: "60%" },
            maxWidth: 750,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            minHeight: 550,
            borderRadius: 4,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(15px)",
            p: 4,
          }}
        >
          <TabLogin />
        </Box>
      </Box>
    </>
  );
}

export default Login;
