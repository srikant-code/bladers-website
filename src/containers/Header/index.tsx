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
        <CustomLink text="Home" href="#" width={140} />
        <CustomLink text="About us" href="#" width={140} />
        <CustomLink text="Join Discord" href="#" width={140} />
        <CustomLink text="Contact us" href="#" width={140} />
      </Flex>
    </Flex>
  );
};
