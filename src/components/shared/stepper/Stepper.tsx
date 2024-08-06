import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import { StepIconProps } from "@mui/material/StepIcon";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";

const steps = ["Cart", "Checkout", "Payment"];

const StepIcon = styled("div")<{ ownerState: { completed?: boolean } }>(
  ({ ownerState }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: ownerState.completed ? "black" : "#a9a9a9",
    "& .MuiSvgIcon-root": {
      fontSize: 30,
    },
  })
);

const icons: { [index: string]: React.ReactElement } = {
  1: <ShoppingCartIcon />,
  2: <PaymentIcon />,
  3: <CheckCircleIcon />,
};

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <StepIcon ownerState={{ completed }} className={className}>
      {icons[String(props.icon)]}
    </StepIcon>
  );
}

interface CustomizedStepperProps {
  activeStep: number;
}

export default function CustomizedStepper({
  activeStep,
}: CustomizedStepperProps) {
  return (
    <Box sx={{ width: "50%", my: 4, mx: "auto", direction: "ltr" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon} />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
