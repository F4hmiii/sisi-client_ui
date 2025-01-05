import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import PropTypes from 'prop-types';

const Stepper = ({ desc }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = desc.length;

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0)); 
    };

    const dataNum = desc.length;

    return (
        <>
            <div>{desc[activeStep]}</div>
            <MobileStepper
                variant="dots"
                steps={dataNum}
                position="static"
                activeStep={activeStep}
                sx={{ 
                    maxWidth: "100%", 
                    flexGrow: 1,
                    "& .MuiMobileStepper-dot": {
                        backgroundColor: "darkgray",
                    },
                    "& .MuiMobileStepper-dotActive": {
                        backgroundColor: "#299D91",
                    }
                }}
            nextButton={
                <Button 
                    size="small" 
                    onClick={handleNext} 
                    sx={{
                        color: "black",
                        fontWeight: "bold",
                    }}
                    disabled={activeStep === dataNum - 1}
                >
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button 
                    size="small" 
                    onClick={handleBack} 
                    disabled={activeStep === 0}
                    sx={{
                        color: "black",
                        fontWeight: "bold",
                    }}
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
            }
        />
        </>
    );
}

Stepper.propTypes = {
    desc: PropTypes.array.isRequired,
};

export default Stepper