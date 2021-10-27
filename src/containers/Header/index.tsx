import "../../assets/css/home.css";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";
import DownloadButton from "../../assets/images/downloadbutton.png";
import { CONSTANTS } from "../../Utils/Constants";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import { useState } from "react";

export const Header = () => {
  const { breakpoint } = useWindowDimensions();
  const styles = {
    container: {
      background: Theme.COLORS.shades.color_1,
      position: "fixed",
      zIndex: 100,
      width: "100%",
    },
    logo: {
      padding: Theme.SPACING(20),
    },
    links: {
      // width: "60%",
    },
  };
  const SVGLines = [
    [
      "M3.40796 5.80518H20.5919",
      "M3.40796 12.5872H20.5919",
      "M3.40796 19.3691H20.5919",
    ],
    [
      "M3.84521 3.84497L20.1553 20.155",
      "M3.90991 3.68311L3.78031 3.81271",
      "M3.84497 20.155L20.1874 3.81256",
    ],
  ];
  const [activeSvgLines, setActiveSvgLines] = useState(0);
  return (
    <Flex style={styles.container} justifyContent="space-around">
      <Icon style={styles.logo} icon={ICONS_SVG.brahmosLogo} />
      <Flex style={styles.links}>
        {breakpoint.active === "lg" || breakpoint.active === "xl" ? (
          <>
            <CustomLink
              sameTab={true}
              text="Home"
              href="#Home"
              width={100}
              removeArrow={true}
            />
            <CustomLink
              sameTab={true}
              text="About us"
              href="#AboutUs"
              width={120}
              removeArrow={true}
            />
            <CustomLink
              text="Join Discord"
              href={CONSTANTS.DISCORD_JOIN_LINK}
              width={140}
            />
            <CustomLink
              sameTab={true}
              text="Contact us"
              href="#ContactUs"
              width={120}
              removeArrow={true}
            />
          </>
        ) : (
          <></>
        )}
        <CustomLink
          sameTab={true}
          href={CONSTANTS.DOWNLOAD_BLADERS_LINK}
          width={200}
          removeArrow={true}>
          <img
            src={DownloadButton}
            alt="Download Bladers Online Multiplayer Spinning Tops"
          />
        </CustomLink>
        {"xssmmd".includes(breakpoint.active) ? (
          <CustomLink
            href="#"
            iconLink={true}
            sameTab={true}
            width={30}
            removeArrow={true}>
            <div
              onClick={() =>
                activeSvgLines ? setActiveSvgLines(0) : setActiveSvgLines(1)
              }
              style={{ marginTop: "15px" }}>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transition: "0.3s ease-in all" }}>
                <path
                  d={SVGLines[activeSvgLines][0]}
                  stroke="#24FFFF"
                  stroke-width="3"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d={SVGLines[activeSvgLines][1]}
                  stroke="#24FFFF"
                  stroke-width="3"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
                <path
                  d={SVGLines[activeSvgLines][2]}
                  stroke="#24FFFF"
                  stroke-width="3"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </CustomLink>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
