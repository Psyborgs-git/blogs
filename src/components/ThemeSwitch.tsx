import { useContext } from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeContext } from "../hooks/useColorSchema";


const ThemeSwitch = (props: IconButtonProps) => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <IconButton {...props} onClick={toggleDarkMode}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
    );
};

export default ThemeSwitch;
