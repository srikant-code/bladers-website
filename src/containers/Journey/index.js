import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { Pxtorem, ResponsiveEffect } from "../../Utils/Constants";
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
      style={{
        width: "100%",
        cursor: "pointer",
        marginLeft: ResponsiveEffect({
          xs: "",
          sm: "",
          md: Theme.SPACING(60),
          lg: Theme.SPACING(60),
          xl: Theme.SPACING(60),
        }),
      }}>
      <Flex
        flexFlow="column"
        alignItems={ResponsiveEffect({
          xs: "center",
          sm: "center",
          md: "flex-start",
          lg: "flex-start",
          xl: "flex-start",
        })}>
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
      style={{
        width: ResponsiveEffect({
          xs: "100%",
          sm: "100%",
          md: "50%",
          lg: "50%",
          xl: "50%",
        }),
        paddingTop: "2.5rem",
        paddingBottom: Theme.SPACING(80),
      }}
      justifyContent={ResponsiveEffect({
        xs: "center",
        sm: "center",
        md: "flex-end",
        lg: "flex-end",
        xl: "flex-end",
      })}>
      <img
        className="animateFromTop"
        style={{
          marginRight: ResponsiveEffect({
            xs: "",
            sm: "",
            md: Theme.SPACING(70),
            lg: Theme.SPACING(110),
            xl: Theme.SPACING(110),
          }),
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
      background: `url(${Background}), linear-gradient(191deg, rgb(179 103 59) 1.4%, rgb(227 80 80) 98.45%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "soft-light",
      boxShadow: "#006773 0px -70px 80px -21px inset",
      backgroundPosition: ResponsiveEffect({
        xs: "right",
        sm: "right",
        md: "center",
        lg: "center",
        xl: "center",
      }),
      // filter:
      //   "drop-shadow(30px 26px 15px #ff8845) drop-shadow(-50px 3px 8px #ffa215)",
      height: ResponsiveEffect({
        xs: "75rem",
        sm: "75rem",
        md: "58rem",
        lg: "58rem",
        xl: "58rem",
      }),
      overflow: "hidden",
    },
    imageDataContainer: {
      width: "100%",
      overflow: "hidden",
      flexDirection: ResponsiveEffect({
        xs: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }),
    },
    dataContainer: {
      overflowX: "hidden",
      overflowY: "scroll",
      width: ResponsiveEffect({
        xs: "100%",
        sm: "100%",
        md: "50%",
        lg: "50%",
        xl: "50%",
      }),
      height: "400px",
      paddingTop: Theme.SPACING(10),
      paddingBottom: "180px",
    },
  };

  const [activeImage, setActiveImage] = useState(1);

  return (
    <Flex
      style={styles.background}
      flexFlow="column"
      justifyContent="flex-start">
      <div style={{ paddingTop: Theme.SPACING(100) }}>
        <Headline text="OUR JOURNEY" width="8rem" translateX="0px" />
      </div>
      <Flex flexFlow="" alignItems="" style={styles.imageDataContainer}>
        <ImagesOfJourney activeImage={activeImage} />
        <Flex
          flexFlow="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          className="scrollHiddenContainer"
          style={styles.dataContainer}>
          {JSON.map((item, i) => {
            return (
              <Box
                key={i}
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
