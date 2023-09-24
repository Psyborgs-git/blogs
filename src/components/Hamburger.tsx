import { IconButton, styled } from "@mui/material";

// animated hamburger button
const Hamburger = styled(IconButton)<{ open: boolean }>(({ theme, open }) => ({
    backgroundColor: "transparent",
    flexDirection: "column",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    pointer: "none",

    "span": {
        display: "block",
        position: "absolute",
        height: "5px",
        width: "30px",
        backgroundColor: theme.palette.text.primary,
        borderRadius: "1px",
        opacity: 1,
        left: "10px",
        right: "10px",
        margin: "auto",
        transform: "rotate(0deg)",
        transition: "all 0.25s ease-in-out",
    },

    "span:nth-child(2), span:nth-child(3)": {
        top: "22.5px",
    },

    ...(open ? {
        "span:nth-child(2)": {
            transform: "rotate(45deg)"
        },
        "span:nth-child(3)": {
            transform: "rotate(-45deg)"
        },
        "span:nth-child(1), span:nth-child(4)": {
            width: "0px",
            opacity: 0,
        },
    } : {
        "span:nth-child(4)": {
            top: "22.5px",
            left: "0px",
            width: "18px",
            bgcolor: "pink"
        },
        "span:nth-child(1)": {
            top: "12.5px",
            right: "0px",
            width: "18px",
            bgcolor: "pink"
        },
    }),

}));


export default Hamburger;