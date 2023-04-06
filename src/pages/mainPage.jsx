import { useTheme } from "../hooks/useTheme";
import BackgroundWhiteElange from "../assets/img/svg/elange-bg-white.svg";
import BackgroundBlackElange from "../assets/img/svg/elange-bg-black.svg";
import IconInstagramBlack from "../assets/icon/icon-instagram-black.svg";
import IconInstagramWhite from "../assets/icon/icon-instagram-white.svg";
import IconSpotifyBlack from "../assets/icon/icon-spotify-black.svg";
import IconSpotifyWhite from "../assets/icon/icon-spotify-white.svg";
import IconSoundCloudBlack from "../assets/icon/icon-soundcloud-black.svg";
import IconSoundCloudWhite from "../assets/icon/icon-soundcloud-white.svg";
import IconYoutubeBlack from "../assets/icon/icon-youtube-black.svg";
import IconYoutubeWhite from "../assets/icon/icon-youtube-white.svg";

const MainPage = () => {
    const { theme } = useTheme();
    return (
        <div className={`w-full h-screen ${theme === "light" ? "bg-white" : "bg-black"} flex flex-col justify-center items-center`}>
            <img src={theme === "light" ? BackgroundWhiteElange : BackgroundBlackElange} className="w-[60%] h-[50%]" alt="Background Elange" />
            <div className="w-[400px] h-14 flex justify-around absolute mt-[40%]">
                <img src={theme === "light" ? IconInstagramBlack : IconInstagramWhite} className="w-[90%] h-[90%]" alt="Icon Instagram" />
                <img src={theme === "light" ? IconSpotifyBlack : IconSpotifyWhite} className="w-[90%] h-[90%]" alt="Icon Instagram" />
                <img src={theme === "light" ? IconSoundCloudBlack : IconSoundCloudWhite} className="w-[90%] h-[90%]" alt="Icon Instagram" />
                <img src={theme === "light" ? IconYoutubeBlack : IconYoutubeWhite} className="w-[90%] h-[90%]" alt="Icon Instagram" />
            </div>
        </div>
    );
}
export default MainPage;