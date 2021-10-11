import { Flex } from "../../components/Container";
import { CustomLink } from "../../components/Link/index";
import { Pxtorem } from "../../Utils/Constants.js";
import Theme from "../../Utils/theme";
import { AddressLinks } from "./addressLinks";
import { FooterLinks } from "./links";

const Styles = {
  footer: {
    background: Theme.COLORS.gradient.gradient_1,
    height: Pxtorem(728),
  },
  addressLinks: {
    marginRight: Theme.SPACING(60),
    marginBottom: Theme.SPACING(60),
  },
};

const Footer = () => {
  return (
    <Flex style={Styles.footer}>
      <Flex alignItems="flex-start">
        <AddressLinks style={Styles.addressLinks} />
        <FooterLinks />
      </Flex>
    </Flex>
  );
};

export default Footer;
