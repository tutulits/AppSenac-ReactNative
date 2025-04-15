import { useContext, useState, createContext } from "react";

const ThemeContext = createContext();

export const Tema = ({ children }) => {
    const [tema, setTema] = useState('light');

    const TemaCor = () => {
        setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ tema, TemaCor }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
