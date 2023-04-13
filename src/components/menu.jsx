import IconCloseBlack from '../assets/icon/icon-close.svg';
import IconCloseWhite from '../assets/icon/icon-close-white.svg';

import { useTheme } from "../hooks/useTheme";

const Menu = ({ toogleMenu, showMenu }) => {

    const { theme } = useTheme()

    return (
        <div className={`transition-all duration-900 ${showMenu ? "z-10 opacity-100" : "-z-10 opacity-0" } h-screen w-full bg-white dark:bg-black absolute flex items-center justify-center`}>
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