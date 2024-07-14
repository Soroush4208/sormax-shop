import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { animated, useSpring } from "@react-spring/web";
import * as React from "react";
import { useTranslation } from "react-i18next";

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { children, in: open, onClick, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

export default function ModalLTerms() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ fontSize: "20px", fontWeight: "bold" ,textDecorationLine:"underline"}}
      >
        {t("sign_up.check.desc")}
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        components={{ Backdrop }}
        componentsProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              width: "60%",
              maxHeight: "80%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 5,
              borderRadius: "8px",
              border: "1px solid gray",
              overflowY: "auto",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{ position: "absolute", top: 10, right: 10 }}
            >
              <HighlightOffIcon fontSize="large" />
            </Button>
            <Typography
              id="spring-modal-title"
              sx={{
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 2,
              }}
            >
              {t("sign_up.Terms_Conditions.title")}
            </Typography>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.introduction.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.introduction.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.definitions.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.definitions.desc_1")}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.definitions.desc_2")}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.definitions.desc_3")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.TermsOfUse.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.TermsOfUse.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.RightsAndResponsibilities.title")}
              </Typography>
              <li>
                <Box>
                  <Typography>
                    {t(
                      "sign_up.Terms_Conditions.RightsAndResponsibilities.UserRights.title"
                    )}
                    :
                  </Typography>
                  <ul>
                    <li style={{ fontWeight: "bold" }}>
                      <Typography>
                        {t(
                          "sign_up.Terms_Conditions.RightsAndResponsibilities.UserRights.desc"
                        )}
                        :
                      </Typography>
                    </li>
                    <li style={{ fontWeight: "bold" }}>
                      <Typography>
                        {t(
                          "sign_up.Terms_Conditions.RightsAndResponsibilities.UserResponsibilities.title"
                        )}
                        :
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {t(
                          "sign_up.Terms_Conditions.RightsAndResponsibilities.UserResponsibilities.desc"
                        )}
                      </Typography>
                    </li>
                    <li style={{ fontWeight: "bold" }}>
                      <Typography>
                        {t(
                          "sign_up.Terms_Conditions.RightsAndResponsibilities.SourmaxRights.title"
                        )}
                        :
                      </Typography>
                    </li>
                    <li>
                      <Typography>
                        {t(
                          "sign_up.Terms_Conditions.RightsAndResponsibilities.SourmaxRights.desc"
                        )}
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.Limitations.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.Limitations.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.PrivacyPolicy.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.PrivacyPolicy.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.ChangesToTerms.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.ChangesToTerms.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.TerminationOfAgreement.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.TerminationOfAgreement.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.LimitationOfLiability.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.LimitationOfLiability.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.GoverningLaw.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.GoverningLaw.desc")}
                </Typography>
              </li>
            </ul>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("sign_up.Terms_Conditions.ContactInformation.title")}
              </Typography>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.ContactInformation.desc")}
                </Typography>
              </li>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.ContactInformation.email")}:
                  Soroush.r80@gmail.com
                </Typography>
              </li>
              <li>
                <Typography>
                  {t("sign_up.Terms_Conditions.ContactInformation.tel")}:
                  09182664208 - 09399449478
                </Typography>
              </li>
            </ul>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
