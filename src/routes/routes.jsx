import IconSunBlack from "../assets/icon/sun-duotone-black.svg";
import IconSunWhite from "../assets/icon/sun-duotone-white.svg";
import IconMenuBlack from "../assets/icon/icon-menu-black.svg";
import IconMenuWhite from "../assets/icon/icon-menu-white.svg";
import LogoElangeBlack from "../assets/img/svg/elange-black.svg";
import LogoElangeWhite from "../assets/img/svg/elange-white.svg";
import { useTheme } from "../hooks/useTheme";
import { Outlet } from "react-router-dom";

const main = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <nav className="bg-white dark:bg-black border-gray-200 fixed w-full">
                <div className="max-w-full flex flex-wrap items-center justify-between mx-12 p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={theme === "light" ? LogoElangeBlack : LogoElangeWhite} className="w-56 h-10 mr-3" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black">
                            {theme === "light" ? (
                                <>
                                    <li>
                                        <button onClick={() => setTheme("dark")}><img src={IconSunBlack} className="w-6 h-6 mr-3" alt="Icon Menu" /></button>
                                    </li>
                                    <li>
                                        <img src={IconMenuBlack} className="w-6 h-6 mr-3" alt="Icon Menu" />
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <button onClick={() => setTheme("light")}><img src={IconSunWhite} className="w-6 h-6 mr-3" alt="Icon Menu" /></button>
                                    </li>
                                    <li>
                                        <img src={IconMenuWhite} className="w-6 h-6 mr-3" alt="Icon Menu" />
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
export default main;