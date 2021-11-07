import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import Theme, { ICONS_SVG } from "../../Utils/theme";

export const AddressLinks: React.FC<any> = ({ style }) => {
  const { breakpoint } = useWindowDimensions();
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
      <Flex
        flexFlow="column wrap"
        alignItems={
          "xssm".includes(breakpoint.active) ? "center" : "flex-start"
        }>
        <Headline
          text="CONTACT US"
          width="7.4rem"
          translateX={"xssm".includes(breakpoint.active) ? "0px" : "30px"}
        />
        <Flex
          flexFlow={
            "xssmmdlg".includes(breakpoint.active) ? "row wrap" : "column"
          }
          alignItems="flex-start"
          justifyContent={
            "xssm".includes(breakpoint.active) ? "center" : "flex-start"
          }>
          <div style={{ marginRight: Theme.SPACING(20) }}>
            <CustomLink
              text="bladers@brahmosinteractive.co"
              href="#"
              type="email"
              icon={ICONS_SVG.email}
              width={320}
              // removeArrow={true}
            />
            <CustomLink
              text="Madhya Pradesh, India"
              href="#"
              icon={ICONS_SVG.location}
              width={350}
            />
            <br />
          </div>
          <div>
            <div>Follow us on</div>
            <Flex
              style={styles.socialLink}
              animation="slide-up"
              animationDelay={100}>
              {/* <CustomLink
                text=""
                href="#"
                icon={ICONS_SVG.instagram}
                iconLink={true}
              /> */}
              <CustomLink
                text=""
                href="https://twitter.com/BrahmosI"
                icon={ICONS_SVG.twitter}
                iconLink={true}
              />
              <CustomLink
                text=""
                href="https://www.linkedin.com/company/brahmos/"
                icon={ICONS_SVG.linkedinOutline}
                iconLink={true}
              />
              <CustomLink
                text=""
                href="https://www.facebook.com/brahmosInteractive/"
                icon={ICONS_SVG.facebook}
                iconLink={true}
              />
            </Flex>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};
