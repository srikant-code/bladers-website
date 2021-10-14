import Theme, { ICONS_SVG } from "../../Utils/theme";
import { Flex } from "../Container";
import { CustomLink } from "../Link";

export const TeamMember = ({
  src,
  alt,
  descp,
  name,
  linkedinLink,
  twitterLink,
}) => {
  const styles = {
    image: { margin: "-35px" },
    name: {
      lineHeight: "0.5",
      fontSize: Theme.SPACING(20),
      color: Theme.COLORS.colors.color_1,
    },
    descp: {
      lineHeight: "1.6",
      marginTop: "0px",
      width: "150px",
      textAlign: "center",
    },
  };
  return (
    <Flex flexFlow="column">
      <img src={src} alt={alt} style={styles.image}></img>
      <Flex flexFlow="column">
        <p style={styles.name}>{name}</p>
        <p style={styles.descp}>{descp}</p>
      </Flex>
      <Flex>
        <CustomLink
          href={linkedinLink}
          // width={140}
          icon={ICONS_SVG.linkedinOutline}
          iconLink={true}
        />
        <CustomLink
          href={twitterLink}
          // width={140}
          icon={ICONS_SVG.twitter}
          iconLink={true}
        />
      </Flex>
    </Flex>
  );
};
