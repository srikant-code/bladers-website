import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
export const Gameplay = () => {
  const styles = {
    activeCard: {
      //   color: Theme.COLORS.colors.color_1,
      fontSize: Theme.SPACING(30),
      width: "70vw",
      height: "70.5vh",
      margin: `${Theme.SPACING(10)} 0 0 0`,
      overflow: "hidden",
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
    video: {
      width: "100%",
      height: "auto",
    },
    watchOnText: {
      position: "absolute",
      marginTop: Theme.SPACING(-100),
      marginLeft: Theme.SPACING(100),
    },
    userAccount: {
      borderRadius: "499px",
      height: Theme.SPACING(50),
      background: Theme.COLORS.gradient.gradient_1,
      border: `${Theme.COLORS.colors.color_1} solid 1px`,
      width: Theme.SPACING(50),
      marginRight: Theme.SPACING(10),
    },
    streamerName: {
      color: Theme.COLORS.colors.color_1,
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
        <div>
          <div style={styles.activeCard} className="gameplayVideo">
            <video
              style={styles.video}
              className="video"
              crossOrigin
              playsInline
              // autoPlay
              muted
              // controls={true}
              poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4">
              <source
                src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div style={styles.watchOnText}>
            <Flex>
              <div style={styles.userAccount}> </div>
              <div>
                <div style={styles.streamerName}>Yoytube Gamer</div>
                <CustomLink text="Stream on Youtube" href="#"></CustomLink>
              </div>
            </Flex>
          </div>
        </div>
        <Flex flexFlow="column wrap">
          <div style={styles.card} className="gameplayVideo"></div>
          <div style={styles.card} className="gameplayVideo"></div>
          <div style={styles.card} className="gameplayVideo"></div>
        </Flex>
      </Flex>
    </Flex>
  );
};
