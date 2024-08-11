import CART_BANK from "@/assets/image/cart-saman.jpg";
import { getIdCookie } from "@/components/login/services";
import { usePostOrder } from "@/components/payment/hooks";
import useCartStore from "@/store/useCartStore";
import SyncIcon from "@mui/icons-material/Sync";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalCanceled from "../modal-canceled/ModalCanceled";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "40px",
    backgroundColor: "white",
    "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
      {
        "-webkit-appearance": "none",
        margin: 0,
      },
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
});

function MainTextFileds() {
  const { t } = useTranslation();
  const cartProducts = useCartStore((state) => state.cart);
  const postOrder = usePostOrder();
  const [cartNumberOne, setCartNumberOne] = useState("");
  const [cartNumberTow, setCartNumberTow] = useState("");
  const [cartNumberThree, setCartNumberThree] = useState("");
  const [cartNumberFour, setCartNumberFour] = useState("");
  const [cvv2Number, setCvv2Number] = useState("");
  const [expireYearNumber, setExpireYearNumber] = useState("");
  const [expireNumberMonth, setExpireNumberMonth] = useState("");
  const userID = getIdCookie();
  const router = useRouter();

  const handelAddNewOrder = () => {
    const newOrderData = {
      user: userID,
      products: cartProducts?.map((item) => ({
        product: item._id,
        count: item.quantity,
      })),
      deliveryStatus: false,
    };
    router.push("/payment/successful-result");
    console.log(newOrderData);
    postOrder.mutate(newOrderData);
  };
  // console.log(postOrder);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Box
          sx={{
            mb: 4,
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5, mt: 1 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.card_number")} :
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.password")} :
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.cvv2")} :
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.expiration_date.title")} :
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.security_code")} :
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              {t("payment.cart_info.email")}:
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "40px",
                gap: 0.4,
              }}
            >
              <CustomTextField
                id="custom-textfield"
                value={cartNumberOne}
                onChange={(e) => setCartNumberOne(e.target.value)}
                inputProps={{
                  maxLength: 4,
                  type: "text",
                }}
              />
              -
              <CustomTextField
                id="custom-textfield"
                value={cartNumberTow}
                onChange={(e) => setCartNumberTow(e.target.value)}
                inputProps={{
                  maxLength: 4,
                  type: "text",
                }}
              />
              -
              <CustomTextField
                id="custom-textfield"
                value={cartNumberThree}
                onChange={(e) => setCartNumberThree(e.target.value)}
                inputProps={{
                  maxLength: 4,
                  type: "text",
                }}
              />
              -
              <CustomTextField
                id="custom-textfield"
                value={cartNumberFour}
                onChange={(e) => setCartNumberFour(e.target.value)}
                inputProps={{
                  maxLength: 4,
                  type: "text",
                }}
              />
            </Box>
            <CustomTextField
              id="custom-textfield"
              fullWidth
              inputProps={{
                maxLength: 8,
                type: "password",
              }}
            />
            <CustomTextField
              id="custom-textfield"
              fullWidth
              value={cvv2Number}
              onChange={(e) => setCvv2Number(e.target.value)}
              inputProps={{
                maxLength: 4,
                type: "text",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: "green" }}>
                  {t("payment.cart_info.expiration_date.month")}
                </Typography>
                <CustomTextField
                  id="custom-textfield"
                  value={expireNumberMonth}
                  onChange={(e) => setExpireNumberMonth(e.target.value)}
                  inputProps={{
                    maxLength: 2,
                    type: "text",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography sx={{ color: "green" }}>
                  {t("payment.cart_info.expiration_date.year")}
                </Typography>
                <CustomTextField
                  id="custom-textfield"
                  value={expireYearNumber}
                  onChange={(e) => setExpireYearNumber(e.target.value)}
                  inputProps={{
                    maxLength: 2,
                    type: "text",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography
                  sx={{
                    width: "130px",
                    textAlign: "center",
                    backgroundColor: "white",
                    py: 1,
                    border: "1px solid gray",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  eQwxJeq
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CustomTextField
                  id="custom-textfield"
                  inputProps={{
                    type: "text",
                  }}
                />
                <SyncIcon color="success" />
              </Box>
            </Box>
            <CustomTextField
              id="custom-textfield"
              fullWidth
              inputProps={{
                type: "text",
              }}
            />
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={handelAddNewOrder}
              >
                {t("payment.cart_info.payment_button")}
              </Button>
              <ModalCanceled />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={CART_BANK.src}
            sx={{ width: { xs: "70%", lg: "100%" }, mx: { xs: "auto" } }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              display: cartNumberFour === "" ? "none" : "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              gap: 1.5,
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {cartNumberOne}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {cartNumberTow}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {cartNumberThree}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              {cartNumberFour}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: 0,
              display: cvv2Number === "" ? "none" : "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              gap: 1.5,
              fontWeight: "bold",
            }}
          >
            CVV2 : {cvv2Number}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: 0,
              display: expireNumberMonth === "" ? "none" : "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              gap: 1.5,
              fontWeight: "bold",
            }}
          >
            {expireYearNumber}/{expireNumberMonth}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MainTextFileds;
