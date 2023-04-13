import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar';
import CustomCursor from 'custom-cursor-react';

import { useTheme } from "../hooks/useTheme";

import 'custom-cursor-react/dist/index.css';

const main = () => {

    const { theme } = useTheme()

    return (
        <>
            <Navbar />
            <Outlet />
            <CustomCursor 
                dimensions={50}
                fill='transparent'
                opacity={1}
                strokeWidth={1}
                strokeColor={theme === "light" ? "#000" : "#FFF"}
                smoothness={{
                  movement: 0.2,
                  scale: 0.1,
                  opacity: 0.2,
                }}
                targetOpacity={0.5}
            />
        </>
    );
}
export default main;