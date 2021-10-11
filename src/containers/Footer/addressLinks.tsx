import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import Theme, { ICONS_SVG } from "../../Utils/theme";

export const AddressLinks: React.FC<any> = ({ style }) => {
  const styles = {
    socialLink: {
      background: Theme.COLORS.shades.color_1,
      borderRadius: Theme.SPACING(10),
      padding: Theme.SPACING(10),
      ...Theme.COLORS.effects.blue_glow,
    },
  };
  return (
    <Flex alignItems="flex-start" style={style}>
      <Flex flexFlow="column wrap" alignItems="flex-start">
        <Headline text="CONTACT US" />
        <CustomLink text="abc@bladers.co" href="#" icon={ICONS_SVG.email} />
        <CustomLink
          text="2nd Floor, Ascendas Park Square Mall, ITPL, Whitefield, Bengaluru, India"
          href="#"
          icon={ICONS_SVG.location}
          width={350}
        />
        <br />
        <p>Follow us on</p>
        <Flex style={styles.socialLink}>
          <CustomLink
            text=""
            href="#"
            icon={ICONS_SVG.facebook}
            iconLink={true}
          />
          <CustomLink
            text=""
            href="#"
            icon={ICONS_SVG.instagram}
            iconLink={true}
          />
          <CustomLink
            text=""
            href="#"
            icon={ICONS_SVG.linkedin}
            iconLink={true}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
