import DownloadBladersImage from "../../assets/svgs/phone_playstore_mockup.png";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";
export const DownloadBladers = () => {
  const styles = {
    mockup: { width: Theme.SPACING(540) },
    playstore: { width: "" },
    appstore: { opacity: 0.4, pointerEvents: "none" },
    text: { lineHeight: 1, paddingTop: Theme.SPACING(20) },
    flex: {
      padding: "65px 0 0 0",
      background: Theme.COLORS.gradient.gradient_1,
    },
  };
  return (
    <>
      <Flex style={styles.flex}>
        <img
          style={styles.mockup}
          src={DownloadBladersImage}
          alt="Download Bladers from Play Store"></img>
        <Flex flexFlow="column">
          <Flex flexFlow="column" style={styles.playstore}>
            <p style={styles.text}>Download now</p>
            <CustomLink
              justifyContent="center"
              href="https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR&hl=en_IN&gl=US&ref=bladers_website">
              <Icon icon={ICONS_SVG.playStore} />
            </CustomLink>
          </Flex>
          <Flex flexFlow="column" style={styles.appstore}>
            <p style={styles.text}>Coming Soon</p>
            <CustomLink
              justifyContent="center"
              href="https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR&hl=en_IN&gl=US&ref=bladers_website">
              <Icon icon={ICONS_SVG.appStore} />
            </CustomLink>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
