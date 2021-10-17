import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { Pxtorem } from "../../Utils/Constants";
import Background from "../../assets/svgs/journey.png";

const Box = ({ text }) => {
  const styles = {
    box: {
      padding: `${Theme.SPACING(10)} ${Theme.SPACING(20)}`,
      border: `${Theme.COLORS.colors.color_1} solid 1px`,
    },
  };
  return (
    <div style={styles.box} className="journeyBox">
      {text}
    </div>
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
    },
  };
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
      topic: "TMini Update release",
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
    {
      date: "July 2020",
      topic: "Team formation",
    },
  ];
  return (
    <Flex style={styles.background}>
      <Headline text="OUR JOURNEY" />
      {JSON.map((item) => {
        return <Box text={item.topic} />;
      })}
    </Flex>
  );
};
