import { ResponsiveEffect } from "../../Utils/Constants";
import Theme, { ICONS_SVG } from "../../Utils/theme";
import { Flex } from "../Container";
import { CustomLink } from "../Link";

const Contributor = ({ data }) => {
  const styles = {
    image: {
      //   margin: "-35px",
      borderRadius: Theme.SPACING(10),
      border: `solid 1px ${Theme.COLORS.colors.color_1}`,
      boxShadow: "rgb(0 0 0 / 85%) 0px 19.6232px 64.2522px 5.77152px",
      width: Theme.SPACING(100),
    },
    name: {
      fontSize: Theme.SPACING(18),
      color: Theme.COLORS.colors.color_1,
      width: Theme.SPACING(180),
      textAlign: "center",
    },
    descp: {
      lineHeight: "1.6",
      marginTop: "0px",
      width: "160px",
      textAlign: "center",
    },
    flex: {
      margin: `${Theme.SPACING(20)}`,
      width: ResponsiveEffect({
        xs: "30%",
        sm: "",
      }),
    },
  };
  return (
    <Flex
      flexFlow="column"
      style={styles.flex}
      animation="slide-up"
      animationDelay={50}
      >
      <img
        src={data.image}
        alt={data.name}
        style={styles.image}
        data-aos="slide-up"
        data-aos-delay={100}
      />
      <p
        style={styles.name}
        data-aos="slide-up"
        data-aos-delay={100}>
        {data.name}
      </p>
      <CustomLink
        href={data.link}
        // width={140}
        icon={
          data.link.includes("twitter")
            ? ICONS_SVG.twitter
            : ICONS_SVG.linkedinOutline
        }
        iconLink={true}
      />
    </Flex>
  );
};

export default Contributor;
