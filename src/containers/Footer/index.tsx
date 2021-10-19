import { Flex } from "../../components/Container";
import { Pxtorem } from "../../Utils/Constants.js";
import Theme from "../../Utils/theme";
import { AddressLinks } from "./addressLinks";
import { FooterLinks } from "./links";
import DiscordJoin from "../../assets/images/join_discord.png";
import { CustomLink } from "../../components/Link";

const Styles = {
  footer: {
    background: Theme.COLORS.gradient.gradient_2,
    height: Pxtorem(728),
    position: "relative",
  },
  addressLinks: {
    marginRight: Theme.SPACING(60),
    marginBottom: Theme.SPACING(60),
  },
};

const Footer = () => {
  return (
    <Flex style={Styles.footer}>
      <div
        id="ContactUs"
        style={{
          position: "absolute",
          bottom: 0,
          right: Theme.SPACING(20),
          width: Theme.SPACING(460),
        }}>
        <CustomLink href="https://discord.gg/qkWvACPEPf">
          <img src={DiscordJoin} alt="join discord of bladers multiplayer" />
        </CustomLink>
      </div>

      <Flex alignItems="flex-start">
        <AddressLinks style={Styles.addressLinks} />
        <FooterLinks />
      </Flex>
    </Flex>
  );
};

export default Footer;
