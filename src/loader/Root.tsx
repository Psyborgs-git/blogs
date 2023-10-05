import React from 'react';
import { Avatar, Box, keyframes } from '@mui/material';


const RotatorAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        scale:1;
    }
    100% {
        transform: rotate(360deg);
        scale: 1;
    }
`;


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
            <Box
                sx={{
                    borderRadius: "21px",
                    boxShadow: `0px 4px 4px 0px #ddd`,
                    height: "220px",
                    width: "220px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    bgcolor: "#fff"
                }}
                children={
                    <Avatar
                        src="/logo.png"
                        alt="logo"
                        variant="rounded"
                        sx={{
                            height: "200px",
                            borderRadius: "50%",
                            width: "200px",
                            animation: `${RotatorAnimation} 2500ms ease-in-out`,
                            alignSelf: "center",
                        }}
                    />
                }
            />
        </Box>
    );
};
