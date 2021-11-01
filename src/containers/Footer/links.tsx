import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import { CONSTANTS, ROUTES, ResponsiveEffect } from "../../Utils/Constants";
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
            href={ROUTES.CHANGE_LOG_ROUTE}
            icon={ICONS_SVG.park}
            width={linkWidth}
            type="internal"
          />
          <CustomLink
            text="Privacy Policy"
            href={ROUTES.PRIVACY_POLICY_ROUTE}
            icon={ICONS_SVG.privacy}
            type="internal"
            width={linkWidth}
          />
          <CustomLink
            text="Game Screenshots"
            href={`${ROUTES.HOME_ROUTE}#GameScrenshots`}
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
            href={ROUTES.PRESS_KIT_ROUTE}
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
            href="#0"
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
            text={
              <>
                Submit a feedback <br />
                or Bug report
              </>
            }
            href={CONSTANTS.BUG_REPORT_LINK}
            icon={ICONS_SVG.feedback}
            width={linkWidth}
            alignItems={"flex-start"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
