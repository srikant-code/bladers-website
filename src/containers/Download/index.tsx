import DownloadBladersImage from "../../assets/images/downloadphonemockup.png";
// import DownloadBladersImage from "../../assets/svgs/phone_playstore_mockup.png";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { CustomLink } from "../../components/Link";
import { CONSTANTS, ResponsiveEffect } from "../../Utils/Constants";
import Theme, { ICONS_SVG } from "../../Utils/theme";
export const DownloadBladers = () => {
  const styles = {
    mockup: {
      width: ResponsiveEffect({
        xs: "100%",
        sm: "100vw",
        md: Theme.SPACING(640),
        lg: Theme.SPACING(540),
        xl: Theme.SPACING(540),
      }),
      filter:
        "drop-shadow(#00000060 0px 15px 9px) drop-shadow(#00000080 0px 34px 22px)",
    },
    playstore: { width: "" },
    appstore: { opacity: 0.4, pointerEvents: "none" },
    text: { lineHeight: 1, paddingTop: Theme.SPACING(20) },
    flex: {
      padding: "65px 0 0 0",
      // background: Theme.COLORS.gradient.gradient_1,
    },
    buttonContainer: {
      margin: ResponsiveEffect({
        xs: Theme.SPACING(80),
        sm: Theme.SPACING(80),
        md: Theme.SPACING(80),
        lg: "",
        xl: "",
      }),
      zIndex: 1,
    },
  };
  return (
    <>
      <Flex style={styles.flex}>
        <img
          style={styles.mockup}
          src={DownloadBladersImage}
          alt="Download Bladers from Play Store"></img>
        <Flex flexFlow="column" style={styles.buttonContainer}>
          <Flex flexFlow="column" style={styles.playstore}>
            <p style={styles.text}>Download now</p>
            <CustomLink
              justifyContent="center"
              href={CONSTANTS.DOWNLOAD_BLADERS_LINK}>
              <Icon icon={ICONS_SVG.playStore} />
            </CustomLink>
          </Flex>
          <Flex flexFlow="column" style={styles.appstore}>
            <p style={styles.text}>Coming Soon</p>
            <CustomLink
              justifyContent="center"
              href={CONSTANTS.DOWNLOAD_BLADERS_LINK}>
              <Icon icon={ICONS_SVG.appStore} />
            </CustomLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
