import React from 'react';
import { Box, keyframes, styled, Typography } from '@mui/material';
import '@fontsource/megrim';
import '@fontsource/poppins';
import Logo_BDT from '../svgs/bdt/Logo';

const RotatorAnimation = keyframes`
    0% {
        transform: rotateY(0deg);
        scale:1;
    }
    0% {
        transform: rotateY(180deg);
        scale:0.9;
    }
    100% {
        transform: rotateY(360deg);
        scale: 1;
    }
`;

const T = styled(Typography)({
    fontFamily: "Megrim",
    fontSize: "9rem",
    animation: `${RotatorAnimation} 3000ms ease-in-out infinite`,
});

export const RootLoaderBD = () => (
    <Box sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
    }}>
        <T>
            BD
        </T>
    </Box>
);

export const TN = styled(Typography)({
    fontFamily: "Poppins",
    fontSize: "9rem",
    textTransform: "lowercase",
    fontWeight: 400,
    strokeWidth: "0.1rem",
    stroke: "#eee",
    color: "#363636",
    strokeDasharray: "0.1rem",
});

export default function NewRootLoader() {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary"
            }}>
            <Logo_BDT
                BoxProps={{
                    sx: {
                        borderRadius: "50%",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        height: "220px",
                        width: "220px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        alignSelf: "center"
                    }
                }}
                svgProps={{
                    height: "200",
                    width: "200",
                    sx: {
                        animation: `${RotatorAnimation} 2000ms ease-in-out`
                    }
                }}
            />
        </Box>
    );
};
