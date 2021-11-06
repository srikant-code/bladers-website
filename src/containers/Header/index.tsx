import "../../assets/css/home.css";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";
import { ReactComponent as DownloadButton } from "../../assets/images/download.svg";
// import DownloadButton from "../../assets/images/downloadbutton.png";
import { CONSTANTS, ROUTES } from "../../Utils/Constants";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import { useState } from "react";

export const Header = () => {
  const { breakpoint } = useWindowDimensions();
  const HeaderLinks = () => (
    <>
      <CustomLink
        sameTab={true}
        text="Home"
        href={`${ROUTES.HOME_ROUTE}#Home`}
        width={100}
        removeArrow={true}
        justifyContent={
          "xllg".includes(breakpoint.active) ? undefined : "center"
        }
      />
      <CustomLink
        sameTab={true}
        text="About us"
        href={`${ROUTES.HOME_ROUTE}#AboutUs`}
        width={120}
        removeArrow={true}
        justifyContent={
          "xllg".includes(breakpoint.active) ? undefined : "center"
        }
      />
      <CustomLink
        text="Join Discord"
        href={CONSTANTS.DISCORD_JOIN_LINK}
        width={140}
        justifyContent={
          "xllg".includes(breakpoint.active) ? undefined : "center"
        }
      />
      <CustomLink
        sameTab={true}
        text="Contact us"
        href={`${ROUTES.HOME_ROUTE}#ContactUs`}
        width={120}
        removeArrow={true}
        justifyContent={
          "xllg".includes(breakpoint.active) ? undefined : "center"
        }
      />
    </>
  );

  const styles = {
    container: {
      background: "#00000075",
      position: "fixed",
      zIndex: 100,
      width: "100%",
      backdropFilter: "blur(8px)",
      transition: "all 0.3s ease-in",
    },
    logo: {
      padding: Theme.SPACING(20),
      width: "xs".includes(breakpoint.active)
        ? Theme.SPACING(140)
        : "sm".includes(breakpoint.active)
        ? Theme.SPACING(160)
        : undefined,
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
      <CustomLink
        sameTab={true}
        href={ROUTES.HOME_ROUTE}
        iconLink={true}
        type="internal"
        width={"xssm".includes(breakpoint.active) ? 120 : undefined}
        justifyContent={
          "xs".includes(breakpoint.active) || activeSvgLines
            ? "center"
            : undefined
        }
        removeArrow={true}>
        <Icon style={styles.logo} icon={ICONS_SVG.brahmosLogo} />
      </CustomLink>
      <Flex style={styles.links}>
        {"lgxl".includes(breakpoint.active) ? (
          <>
            <HeaderLinks />
          </>
        ) : (
          <></>
        )}
        <CustomLink
          sameTab={true}
          href={CONSTANTS.DOWNLOAD_BLADERS_LINK}
          width={180}
          removeArrow={true}>
          {/* <img
            style={{ width: Theme.SPACING(180) }}
            src={DownloadButton}
            alt="Download Bladers Online Multiplayer Spinning Tops"
          /> */}
          <DownloadButton style={{ width: Theme.SPACING(180) }} />
        </CustomLink>
        {"xssmmd".includes(breakpoint.active) ? (
          <>
            <CustomLink
              href="#"
              iconLink={true}
              sameTab={true}
              width={50}
              justifyContent="center"
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
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d={SVGLines[activeSvgLines][1]}
                    stroke="#24FFFF"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d={SVGLines[activeSvgLines][2]}
                    stroke="#24FFFF"
                    strokeWidth="3"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </CustomLink>
            {activeSvgLines ? (
              <Flex
                style={{
                  margin: Theme.SPACING(20),
                }}>
                <HeaderLinks />
              </Flex>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};
