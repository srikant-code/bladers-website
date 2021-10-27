import { Flex } from "../../components/Container";
import { Pxtorem, ResponsiveEffect } from "../../Utils/Constants.js";
import Theme from "../../Utils/theme";
import { AddressLinks } from "./addressLinks";
import { FooterLinks } from "./links";
import DiscordJoin from "../../assets/images/join_discord.png";
import { CustomLink } from "../../components/Link";

const Footer = () => {
  const Styles = {
    footer: {
      // background: Theme.COLORS.gradient.gradient_2,
      height: ResponsiveEffect({
        xs: Pxtorem(1190),
        sm: Pxtorem(900),
        md: Pxtorem(708),
        lg: Pxtorem(788),
        xl: Pxtorem(728),
      }),
      position: "relative",
      marginTop: ResponsiveEffect({
        xs: Theme.SPACING(-140),
        sm: Theme.SPACING(-140),
        md: "",
        lg: "",
        xl: "",
      }),
    },
    addressLinks: {
      marginRight: ResponsiveEffect({
        xs: "",
        sm: "",
        md: Theme.SPACING(10),
        lg: Theme.SPACING(60),
        xl: Theme.SPACING(60),
      }),
      marginBottom: Theme.SPACING(60),
    },
  };
  return (
    <Flex style={Styles.footer}>
      <div
        id="ContactUs"
        style={{
          position: "absolute",
          bottom: 0,
          right: ResponsiveEffect({
            xs: Theme.SPACING(0),
            sm: Theme.SPACING(20),
            md: Theme.SPACING(20),
            lg: Theme.SPACING(20),
            xl: Theme.SPACING(20),
          }),
          width: ResponsiveEffect({
            xs: "100%",
            sm: Theme.SPACING(460),
            md: Theme.SPACING(460),
            lg: Theme.SPACING(460),
            xl: Theme.SPACING(460),
          }),
        }}>
        <CustomLink
          href="https://discord.gg/qkWvACPEPf"
          removeArrow={true}
          iconLink={true}
          justifyContent={"center"}>
          <img
            src={DiscordJoin}
            alt="join discord of bladers multiplayer"
            style={{
              width: ResponsiveEffect({
                xs: "100%",
                sm: "",
              }),
            }}
          />
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
