import TextFieldsAddProducts from "@/components/dashboard/components/add-products/text-filds-add-products/TextFildsAddProducts";
import TitleModalAdd from "@/components/dashboard/components/add-products/title-modal-add/TitleModalAdd";
import DynamicThemeFormProvider from "@/themes/DynamicThemeFormProvider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
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
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddProduct() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ my: 4 }}>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="success"
        sx={{
          gap: 2,
          color: "green",
        }}
      >
        <Typography>{t("dashboard.modal.add")}</Typography>
        <AddCircleIcon color="success" />
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <TitleModalAdd />
            <DynamicThemeFormProvider>
              <TextFieldsAddProducts setOpen={setOpen} />
            </DynamicThemeFormProvider>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
