import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { Pxtorem } from "../../Utils/Constants";
import Background from "../../assets/svgs/journey.png";
export const OurJourney = () => {
  const styles = {
    flex: {
      margin: 0,
      background: Theme.COLORS.gradient.gradient_3,
      padding: Theme.SPACING(30),
    },
    background: {
      background: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "54rem",
    },
  };
  return (
    <Flex style={styles.background}>
      <Headline text="OUR JOURNEY" />
    </Flex>
  );
};
