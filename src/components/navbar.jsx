import LogoElangeBlack from "../assets/img/svg/elange-black.svg";
import LogoElangeWhite from "../assets/img/svg/elange-white.svg";
import ElangeSymbolBlack from "../assets/img/svg/elange-symbol-black.svg";
import ElangeSymbolWhite from "../assets/img/svg/elange-symbol-white.svg";

import { useTheme } from "../hooks/useTheme";
import useBoolean from "../hooks/useBoolean";
import Menu from "./menu";
import MenuActions from "./menu-actions";

const Navbar = () => {

    const { theme } = useTheme()
    const {value: showMenu, toggle: toogleMenu } = useBoolean(false);
    
    return (
        <>
            <nav className="bg-white dark:bg-black border-gray-200 fixed top-0 z-0">
                <div className="w-screen flex flex-wrap items-center justify-between px-5 py-4 md:py-8">
                    <div className="w-2/6">
                        <a href="#" className="flex items-center">
                            <img src={theme === "light" ? LogoElangeBlack : LogoElangeWhite} className="h-3 md:h-6" alt="Elange Logo" />
                        </a>
                    </div>
                    <div className="w-2/6 flex justify-center">
                        <img src={theme === "light" ? ElangeSymbolBlack : ElangeSymbolWhite} className="h-4 md:h-8" alt="Elange Symbol" />
                    </div>
                    <div className="w-2/6 flex justify-end">
                        <div data-collapse-toggle="navbar-default" className="md:hidden">
                            <MenuActions toogleMenu={toogleMenu} />
                        </div>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <MenuActions toogleMenu={toogleMenu} />
                        </div>
                    </div>
                </div>
            </nav>
            <Menu toogleMenu={toogleMenu} showMenu={showMenu} />
        </>
    );
}
 
export default Navbar;