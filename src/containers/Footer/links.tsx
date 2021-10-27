import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import { CONSTANTS, ResponsiveEffect } from "../../Utils/Constants";
import Theme, { ICONS_SVG } from "../../Utils/theme";

export const FooterLinks = () => {
  const linkWidth = ResponsiveEffect({
    xs: 200,
    sm: 200,
    md: 200,
    lg: undefined,
    xl: undefined,
  });
  return (
    <Flex alignItems="flex-start" flexFlow="column wrap">
      <Headline text="LINKS" width="3.8rem" translateX="15px" />
      <Flex alignItems="flex-start">
        <Flex flexFlow="column wrap" alignItems="flex-start">
          <CustomLink
            text="Downloads"
            href={CONSTANTS.DOWNLOAD_BLADERS_LINK}
            icon={ICONS_SVG.downloads}
            width={linkWidth}
          />
          <CustomLink
            text="Change log & Updates"
            href="#"
            icon={ICONS_SVG.park}
            width={linkWidth}
          />
          <CustomLink
            text="Privacy Policy"
            href="/privacy-policy"
            icon={ICONS_SVG.privacy}
            type="internal"
            width={linkWidth}
          />
          <CustomLink
            text="Game Screenshots"
            href="#GameScrenshots"
            icon={ICONS_SVG.phone}
            sameTab={true}
            width={linkWidth}
          />
          {/* <CustomLink
            text="System Requirements"
            href="#"
            icon={ICONS_SVG.developer}
          /> */}
          <CustomLink
            text="Press Kit"
            href="/press-kit"
            icon={ICONS_SVG.contact}
            type="internal"
            width={linkWidth}
          />
        </Flex>
        <Flex
          style={{
            marginLeft: ResponsiveEffect({
              xs: "",
              sm: "",
              md: Theme.SPACING(60),
              lg: Theme.SPACING(60),
              xl: Theme.SPACING(60),
            }),
          }}
          flexFlow="column wrap"
          alignItems="flex-start">
          <CustomLink
            text="Get Featured"
            href="#"
            icon={ICONS_SVG.video}
            width={linkWidth}
          />
          <CustomLink
            text="Join Discord"
            href={CONSTANTS.DISCORD_JOIN_LINK}
            icon={ICONS_SVG.discord}
            width={linkWidth}
          />
          <CustomLink
            text="Contact Us"
            href={CONSTANTS.DISCORD_JOIN_LINK}
            icon={ICONS_SVG.contact}
            width={linkWidth}
          />
          <CustomLink
            text="Submit a feedback"
            href="#"
            icon={ICONS_SVG.feedback}
            width={linkWidth}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
