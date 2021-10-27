import { Acheivements } from "../../containers/Acheivements";
import { DownloadBladers } from "../../containers/Download";
import { Gameplay } from "../../containers/Gameplay";
import { OurJourney } from "../../containers/Journey";
import { ScreenshotSlideshow } from "../../containers/Screenshots";
import { TeamBrahmos } from "../../containers/Team";
import Screenshot1 from "../../assets/svgs/screenshot1.png";
import { Pxtorem, ResponsiveEffect } from "../../Utils/Constants";

const LandingPage = () => {
  return (
    <>
      <div
        style={{
          background: `url(${Screenshot1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: ResponsiveEffect({
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "right",
          }),
          height: "100vh",
        }}
        id="Home"
      />
      <Gameplay />
      <Acheivements />
      <OurJourney />
      <TeamBrahmos />
      <ScreenshotSlideshow />
      <DownloadBladers />
    </>
  );
};

export default LandingPage;
