import { useTheme } from "../hooks/useTheme";
import BackgroundWhiteElange from "../assets/img/svg/elange-bg-white.svg";
import BackgroundMobileWhiteElange from "../assets/img/svg/elange-bg-mobile-white.svg";
import BackgroundBlackElange from "../assets/img/svg/elange-bg-black.svg";
import IconInstagramBlack from "../assets/icon/icon-instagram-black.svg";
import IconInstagramWhite from "../assets/icon/icon-instagram-white.svg";
import IconSpotifyBlack from "../assets/icon/icon-spotify-black.svg";
import IconSpotifyWhite from "../assets/icon/icon-spotify-white.svg";
import IconSoundCloudBlack from "../assets/icon/icon-soundcloud-black.svg";
import IconSoundCloudWhite from "../assets/icon/icon-soundcloud-white.svg";
import IconYoutubeBlack from "../assets/icon/icon-youtube-black.svg";
import IconYoutubeWhite from "../assets/icon/icon-youtube-white.svg";

import useMediaQuery from "../hooks/useMediaQuery";

const MainPage = () => {

    const { theme } = useTheme();
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section className={`flex flex-col h-screen w-screen ${theme === "light" ? "bg-white" : "bg-black"}`}>
            <div className="mt-40 w-full h-auto flex items-center justify-center">
                {
                    isMobile ? (
                        <img src={BackgroundMobileWhiteElange} className="w-[70%]" alt="Background Elange" />
                    ) : (
                        <img src={theme === "light" ? BackgroundWhiteElange : BackgroundBlackElange} className="h-auto w-[50%] lg:w-[65%] lg:h-[70%]" alt="Background Elange" />
                    )
                }
            </div>
            <div className="w-full h-auto flex items-center justify-center">
                <div className="block w-[300px] md:max-2xl:w-[400px] h-14 flex justify-between mt-24">
                    <img src={theme === "light" ? IconInstagramBlack : IconInstagramWhite} className="h-10 md:max-2xl:h-12" alt="Icon Instagram" />
                    <img src={theme === "light" ? IconSpotifyBlack : IconSpotifyWhite} className="h-10 md:max-2xl:h-12" alt="Icon Instagram" />
                    <img src={theme === "light" ? IconSoundCloudBlack : IconSoundCloudWhite} className="h-10 md:max-2xl:h-12" alt="Icon Instagram" />
                    <img src={theme === "light" ? IconYoutubeBlack : IconYoutubeWhite} className="h-10 md:max-2xl:h-12" alt="Icon Instagram" />
                </div>
            </div>
        </section>
    );
}
export default MainPage;