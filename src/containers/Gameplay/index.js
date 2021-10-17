import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
export const Gameplay = () => {
  const styles = {
    activeCard: {
      //   color: Theme.COLORS.colors.color_1,
      fontSize: Theme.SPACING(30),
      width: "70vw",
      height: "70.5vh",
      margin: `${Theme.SPACING(10)} 0 0 0`,
    },
    flex: {
      margin: 0,
      background: Theme.COLORS.gradient.gradient_3,
      padding: Theme.SPACING(30),
    },
    card: {
      width: "20vw",
      height: "23vh",
      margin: `${Theme.SPACING(10)} ${Theme.SPACING(10)} 0 ${Theme.SPACING(
        10
      )}`,
      opacity: 0.4,
    },
    indicator: {
      margin: Theme.SPACING(-27),
    },
    indicatorCont: {
      marginBottom: Theme.SPACING(-42),
      zIndex: 1,
    },
  };
  return (
    <Flex style={styles.flex}>
      <Flex alignItems="flex-start" style={styles.indicatorCont}>
        <img src={Line} style={styles.indicator} alt="gameplay indicator" />
        <div>
          <Headline text="GAMEPLAY" />
        </div>
      </Flex>
      <Flex>
        <div style={styles.activeCard} className="gameplayVideo"></div>
        <Flex flexFlow="column wrap">
          <div style={styles.card} className="gameplayVideo"></div>
          <div style={styles.card} className="gameplayVideo"></div>
          <div style={styles.card} className="gameplayVideo"></div>
        </Flex>
      </Flex>
    </Flex>
  );
};
