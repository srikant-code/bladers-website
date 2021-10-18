import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { Pxtorem } from "../../Utils/Constants";
import Background from "../../assets/svgs/journey.png";
import { useState } from "react";

const JSON = [
  {
    date: "June 2020",
    topic: "Development started",
  },
  {
    date: "July 2020",
    topic: "Team formation",
  },
  {
    date: "October 2020",
    topic: "Beta testing started",
  },
  {
    date: "1st November 2020",
    topic: "Pre-registration started",
  },
  {
    date: "16th November 2020",
    topic: "Launch on Playstore",
  },
  {
    date: "20th November 2020",
    topic: "1k+ downloads",
  },
  {
    date: "6th December 2020",
    topic: "5k+ downloads",
  },
  {
    date: "15th December 2020",
    topic: "Mini Update release",
  },
  {
    date: "16th December 2020",
    topic: "10k+ downloads",
  },
  {
    date: "21st January 2021",
    topic: "50k+ downloads",
  },
  {
    date: "7th March 2021",
    topic: "100k+ downloads",
  },
  {
    date: "15th May 2021",
    topic: "Mega Update 2.0 release",
  },
];

const Box = ({ topic, date, mouseMove }) => {
  const styles = {
    box: {
      padding: `${Theme.SPACING(10)} ${Theme.SPACING(20)}`,
      border: `${Theme.COLORS.colors.color_1} solid 1px`,
      margin: Theme.SPACING(8),
    },
    date: {
      color: Theme.COLORS.shades.color_1,
      marginLeft: Theme.SPACING(10),
      marginTop: Theme.SPACING(10),
    },
  };
  return (
    <div
      onMouseEnter={() => mouseMove()}
      className="jouneyCard"
      style={{ width: "100%", cursor: "pointer" }}>
      <Flex flexFlow="column" alignItems="flex-start">
        <div style={styles.date}>{date}</div>
        <div style={styles.box} className="journeyBox">
          {topic}
        </div>
      </Flex>
    </div>
  );
};

const ImagesOfJourney = ({ activeImage }) => {
  return (
    <Flex
      style={{ width: "50%", paddingBottom: Theme.SPACING(100) }}
      justifyContent="flex-end">
      <img
        className="animateFromTop"
        style={{
          marginRight: Theme.SPACING(30),
          boxShadow: "0px 19.6232px 54.2522px 5.77152px rgba(0, 0, 0, 0.75)",
          borderRadius: "12px",
          border: `${Theme.COLORS.colors.color_1} solid 1px`,
        }}
        src={
          require(`../../assets/images/journey${activeImage + 1}.png`).default
        }
        alt={JSON[activeImage].topic}
      />
    </Flex>
  );
};

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
      overflow: "hidden",
    },
  };

  const [activeImage, setActiveImage] = useState(1);

  return (
    // <div style={{ overflow: "scroll" }}>
    <Flex
      style={styles.background}
      flexFlow="column"
      justifyContent="flex-start">
      <div style={{ paddingTop: Theme.SPACING(100) }}>
        <Headline text="OUR JOURNEY" />
      </div>
      <Flex
        flexFlow=""
        alignItems=""
        style={{ width: "100%", overflow: "hidden" }}>
        <ImagesOfJourney activeImage={activeImage} />
        <Flex
          flexFlow="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          className="scrollHiddenContainer"
          style={{
            overflow: "scroll",
            width: "50%",
            paddingTop: Theme.SPACING(10),
            paddingBottom: "180px",
          }}>
          {JSON.map((item, i) => {
            return (
              <Box
                topic={item.topic}
                date={item.date}
                mouseMove={() => setActiveImage(i)}
              />
            );
          })}
        </Flex>
      </Flex>
    </Flex>
    // {/* </div> */}
  );
};
