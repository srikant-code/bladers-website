import DownloadBladersImage from "../../assets/svgs/phone_playstore_mockup.png";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import Theme, { ICONS_SVG } from "../../Utils/theme";
export const DownloadBladers = () => {
  const styles = {
    mockup: { width: "30%" },
    playstore: { width: "" },
    appstore: { opacity: 0.4 },
    text: { lineHeight: 1, paddingTop: Theme.SPACING(20) },
  };
  return (
    <>
      <Flex>
        <img
          style={styles.mockup}
          src={DownloadBladersImage}
          alt="Download Bladers from Play Store"></img>
        <Flex flexFlow="column">
          <Flex flexFlow="column" style={styles.playstore}>
            <p style={styles.text}>Download now</p>
            <Icon icon={ICONS_SVG.playStore} />
          </Flex>
          <Flex flexFlow="column" style={styles.appstore}>
            <p style={styles.text}>Coming Soon</p>
            <Icon icon={ICONS_SVG.appStore} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
