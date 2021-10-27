import { ResponsiveEffect } from "../../Utils/Constants";
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
    image: {
      margin: "-35px",
      width: ResponsiveEffect({
        xs: "100%",
        sm: "100%",
        md: "",
        lg: "",
        xl: "",
      }),
    },
    name: {
      lineHeight: "0.5",
      fontSize: Theme.SPACING(20),
      color: Theme.COLORS.colors.color_1,
    },
    descp: {
      lineHeight: "1.6",
      marginTop: "0px",
      width: "160px",
      textAlign: "center",
    },
    flex: {
      margin: `${Theme.SPACING(20)} 0`,
      width: ResponsiveEffect({
        xs: "45%",
        sm: "45%",
        md: "48%",
        lg: "",
        xl: "",
      }),
    },
  };
  return (
    <Flex flexFlow="column" style={styles.flex}>
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
