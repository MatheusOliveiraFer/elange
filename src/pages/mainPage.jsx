import { useTheme } from "../hooks/useTheme";
import BackgroundWhiteElange from "../assets/img/svg/elange-bg-white.svg";
import BackgroundBlackElange from "../assets/img/svg/elange-bg-black.svg";

const MainPage = () => {
    const { theme } = useTheme();
    return (
        <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-black"} flex justify-center items-center`}>
            <img src={theme === "light" ? BackgroundWhiteElange : BackgroundBlackElange} className="w-[60%] h-[50%]" alt="Background Elange" />
        </div>
    );
}
export default MainPage;