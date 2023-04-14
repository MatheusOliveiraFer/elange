import IconCloseBlack from '../assets/icon/icon-close.svg';
import IconCloseWhite from '../assets/icon/icon-close-white.svg';

import { useTheme } from "../hooks/useTheme";

const Menu = ({ toogleMenu, showMenu }) => {

    const { theme } = useTheme()

    return (
        <div className={`transition-all duration-1000 ${showMenu ? "z-10 h-screen opacity-100" : "h-0 -z-10 opacity-90" } w-full bg-white dark:bg-black absolute top-0 flex items-center justify-center`}>
            <span onClick={toogleMenu} className="cursor-pointer absolute right-10 top-12">
                <img src={theme === "light" ? IconCloseBlack : IconCloseWhite} className="w-4 h-4" />
            </span>
            <div className="grid grid-flow-col auto-cols-max gap-x-10">
                <a className="dark:text-white" href="#">About</a>
                <a className="dark:text-white" href="#">Music</a>
                <a className="dark:text-white" href="#">Videos</a>
                <a className="dark:text-white" href="#">Contact</a>
            </div>
        </div>
    );
}
 
export default Menu;