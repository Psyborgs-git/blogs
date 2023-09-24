import React, { PropsWithChildren } from 'react';

// material ui
import { ThemeProvider, CssBaseline, useMediaQuery, Theme } from '@mui/material';

// helmet for seo
import { Helmet } from 'react-helmet';

// theme
import { lightTheme, darkTheme } from './index';
import { ThemeContext } from "../hooks/useColorSchema";


const ThemeWrapper = (
    { children, ...props }: PropsWithChildren<{
        darkTheme?: Theme;
        lightTheme?: Theme;
    }>
) => {

    // theming logic
    const [darkMode, setDarkMode] = React.useState(false);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const toggleDarkMode = () => { setDarkMode(!darkMode); };
    React.useEffect(() => { setDarkMode(prefersDarkMode); }, [prefersDarkMode]);
    // 

    // theme
    const theme = darkMode ? (props.darkTheme ?? darkTheme) : (props.lightTheme ?? lightTheme);
    // 

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            <Helmet>
                <meta name="theme-color" content={theme.palette.background.default} />
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeWrapper;