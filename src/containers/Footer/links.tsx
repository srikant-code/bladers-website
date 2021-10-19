import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";

export const FooterLinks = () => {
  return (
    <Flex alignItems="flex-start" flexFlow="column wrap">
      <Headline text="LINKS" />
      <Flex alignItems="flex-start">
        <Flex flexFlow="column wrap" alignItems="flex-start">
          <CustomLink
            text="Downloads"
            href="https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR&hl=en_IN&gl=US&ref=bladers_website"
            icon={ICONS_SVG.downloads}
          />
          <CustomLink
            text="Change log & Updates"
            href="#"
            icon={ICONS_SVG.park}
          />
          <CustomLink text="Privacy Policy" href="#" icon={ICONS_SVG.privacy} />
          <CustomLink text="Game Screenshots" href="#" icon={ICONS_SVG.phone} />
          <CustomLink
            text="System Requirements"
            href="#"
            icon={ICONS_SVG.developer}
          />
          <CustomLink text="Press Kit" href="#" icon={ICONS_SVG.contact} />
        </Flex>
        <Flex
          style={{ marginLeft: Theme.SPACING(60) }}
          flexFlow="column wrap"
          alignItems="flex-start">
          <CustomLink text="Get Featured" href="#" icon={ICONS_SVG.video} />
          <CustomLink
            text="Join Discord"
            href="https://discord.gg/qkWvACPEPf"
            icon={ICONS_SVG.discord}
          />
          <CustomLink
            text="Contact Us"
            href="https://discord.gg/qkWvACPEPf"
            icon={ICONS_SVG.contact}
          />
          <CustomLink
            text="Submit a feedback"
            href="#"
            icon={ICONS_SVG.feedback}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
