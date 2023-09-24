import { createTheme } from '@mui/material/styles';

// Light theme colors
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2196f3', // Primary color
        },
        secondary: {
            main: '#f50057', // Secondary color
        },
        text: {
            primary: '#333333', // Primary text color
            secondary: '#757575', // Secondary text color
        },
        background: {
            default: 'rgba(255,255,255,1)', // Default background color
            paper: "rgba(246,246,246,0.6)"
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)', // Paper shadow
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px', // Button border radius
                },
            },
        },
    },
});

// Dark theme colors
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#2196f3', // Primary color
        },
        secondary: {
            main: '#f50057', // Secondary color
        },
        text: {
            primary: '#ffffff', // Primary text color
            secondary: '#bdbdbd', // Secondary text color
        },
        background: {
            default: "rgba(0,0,0,1)",
            paper: 'rgba(36,36,36,0.6)', // Default background color
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 6px rgba(255, 255, 255, 0.15)', // Paper shadow
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px', // Button border radius
                },
            },
        },
    },
});

export { lightTheme, darkTheme };
