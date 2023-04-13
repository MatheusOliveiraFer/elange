import IconSunBlack from "../assets/icon/sun-duotone-black.svg";
import IconSunWhite from "../assets/icon/sun-duotone-white.svg";
import IconMenuBlack from "../assets/icon/icon-menu-black.svg";
import IconMenuWhite from "../assets/icon/icon-menu-white.svg";

import { useTheme } from "../hooks/useTheme";

const MenuActions = ({toogleMenu}) => {
    const { theme, setTheme } = useTheme()

    return (
        <ul className="font-medium flex gap-1 w-auto py-4 md:p-0 md:flex-row md:space-x-8 md:border-0 md:bg-white dark:bg-black md:dark:bg-black">
            {theme === "light" ? (
                <>
                    <li>
                        <button onClick={() => setTheme("dark")}><img src={IconSunBlack} className="w-6 h-6 mr-3" alt="Icon Menu" /></button>
                    </li>
                    <li>
                        <img src={IconMenuBlack} className="w-6 h-6 mr-3" alt="Icon Menu" onClick={toogleMenu} />
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <button onClick={() => setTheme("light")}><img src={IconSunWhite} className="w-6 h-6 mr-3" alt="Icon Menu" /></button>
                    </li>
                    <li>
                        <img src={IconMenuWhite} className="w-6 h-6 mr-3" alt="Icon Menu" onClick={toogleMenu} />
                    </li>
                </>
            )}
        </ul>
    );
}
 
export default MenuActions;