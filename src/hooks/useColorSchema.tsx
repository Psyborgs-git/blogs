import { createContext } from 'react';

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    darkMode: false,
    toggleDarkMode: () => { },
});
