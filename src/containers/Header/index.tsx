import "../../assets/css/home.css";
import { Flex } from "../../components/Container";
import { Icon } from "../../components/Icon";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";

export const Header = () => {
  const styles = {
    container: { background: Theme.COLORS.shades.color_1 },
    logo: {
      padding: Theme.SPACING(20),
    },
    links: {
      // width: "60%",
    },
  };
  return (
    <Flex style={styles.container} justifyContent="space-around">
      <Icon style={styles.logo} icon={ICONS_SVG.brahmosLogo} />
      <Flex style={styles.links}>
        <CustomLink sameTab={true} text="Home" href="#Home" width={140} />
        <CustomLink
          sameTab={true}
          text="About us"
          href="#AboutUs"
          width={140}
        />
        <CustomLink
          text="Join Discord"
          href="https://discord.gg/qkWvACPEPf"
          width={140}
        />
        <CustomLink
          sameTab={true}
          text="Contact us"
          href="#ContactUs"
          width={140}
        />
      </Flex>
    </Flex>
  );
};
