import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import Line from "../../assets/svgs/indicator_line.png";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import { ResponsiveEffect } from "../../Utils/Constants";
const VideoData = [
  {
    id: 0,
    poster:
      "https://user-images.githubusercontent.com/46858011/137938012-feb86c11-a129-4728-af4e-4616fdd38fcd.png",
    source720p:
      "https://user-images.githubusercontent.com/46858011/137812386-c32fe8b6-63ae-4d7c-85d0-35075295b886.mp4",
    source360p:
      "https://user-images.githubusercontent.com/46858011/137813452-2c6fe16a-871d-40bf-b177-0642e26c56ae.mp4",
    submittedBy: "DarkSpeezo YT",
    submissionSource:
      "http://youtube.com/watch?v=JltLRg2YPLc&ab_channel=%F0%9F%92%A5DarkSpeezoYT%F0%9F%92%A5",
    submitterIcon:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/123974106/original/9a8ac3c279b830e1a774bdbcf15b7a89ba493117/make-you-a-professional-gaming-banner-and-profile-picture.jpg",
  },
  {
    id: 1,
    poster:
      "https://user-images.githubusercontent.com/46858011/137938012-feb86c11-a129-4728-af4e-4616fdd38fcd.png",
    source720p:
      "https://user-images.githubusercontent.com/46858011/137812386-c32fe8b6-63ae-4d7c-85d0-35075295b886.mp4",
    source360p:
      "https://user-images.githubusercontent.com/46858011/137813452-2c6fe16a-871d-40bf-b177-0642e26c56ae.mp4",
    submittedBy: "Geer Gamer",
    submissionSource:
      "http://youtube.com/watch?v=JltLRg2YPLc&ab_channel=%F0%9F%92%A5DarkSpeezoYT%F0%9F%92%A5",
    submitterIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLVjWQIiuAVtabZYzaiI_0lobU3yrN8wkplOV4IbPVVJdpUHWfM82sBdY0CJ3-33Sub8&usqp=CAU",
  },
  {
    id: 2,
    poster:
      "https://user-images.githubusercontent.com/46858011/137938012-feb86c11-a129-4728-af4e-4616fdd38fcd.png",
    source720p:
      "https://user-images.githubusercontent.com/46858011/137812386-c32fe8b6-63ae-4d7c-85d0-35075295b886.mp4",
    source360p:
      "https://user-images.githubusercontent.com/46858011/137813452-2c6fe16a-871d-40bf-b177-0642e26c56ae.mp4",
    submittedBy: "Chameleeon Commander",
    submissionSource:
      "http://youtube.com/watch?v=JltLRg2YPLc&ab_channel=%F0%9F%92%A5DarkSpeezoYT%F0%9F%92%A5",
    submitterIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRih4J6u0eVZRgLWKvYFvJYZdPKulbj0SWIqhENJ2uDYJbzNKrG3JntmtJAbAzRFOTG1LM&usqp=CAU",
  },
];

export const Gameplay = () => {
  const { breakpoint } = useWindowDimensions();
  const activeVideoWidth = ResponsiveEffect({
    xs: 95,
    sm: 95,
    md: 95,
    lg: 70,
    xl: 72,
  });
  const otherVideoWidth = ResponsiveEffect({
    xs: 40,
    sm: 40,
    md: 40,
    lg: 20,
    xl: 20,
  });
  const styles = {
    activeCard: {
      //   color: Theme.COLORS.colors.color_1,
      fontSize: Theme.SPACING(30),
      width: `${activeVideoWidth}vw`,
      height: `${(activeVideoWidth / 16) * 9}vw`,
      margin: `${Theme.SPACING(10)} 0 0 0`,
      overflow: "hidden",
      borderRadius: ResponsiveEffect({
        xs: Theme.SPACING(12),
        md: "",
        sm: "",
        lg: "",
        xl: "",
      }),
    },
    flex: {
      margin: 0,
      // background: Theme.COLORS.gradient.gradient_3,
      background: "#01001c",
      padding: Theme.SPACING(30),
    },
    card: {
      width: `${otherVideoWidth}vw`,
      height: `${(otherVideoWidth / 16) * 9}vw`,
      margin: `${Theme.SPACING(10)} ${Theme.SPACING(10)} 0 ${Theme.SPACING(
        10
      )}`,
      opacity: 0.4,
      overflow: "hidden",
      borderRadius: ResponsiveEffect({
        xs: Theme.SPACING(8),
        md: "",
      }),
    },
    indicator: {
      margin: Theme.SPACING(-27),
      display: ResponsiveEffect({
        xs: "none",
        sm: "none",
        md: "none",
        lg: "",
        xl: "",
      }),
    },
    indicatorCont: {
      marginBottom: Theme.SPACING(-42),
      zIndex: 1,
    },
    video: {
      //   width: "100%",
      height: "100%",
    },
    actvideo: {
      width: "100%",
      //   height: "100%",
    },
    watchOnText: {
      position: "absolute",
      marginTop: Theme.SPACING(-100),
      marginLeft: ResponsiveEffect({
        xs: Theme.SPACING(80),
        sm: Theme.SPACING(80),
        md: Theme.SPACING(100),
        lg: Theme.SPACING(100),
        xl: Theme.SPACING(100),
      }),
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
    headline: {
      overflow: "hidden",
      margin: ResponsiveEffect({
        xs: `${Theme.SPACING(30)} 0 ${Theme.SPACING(60)} 0`,
        sm: `${Theme.SPACING(30)} 0 ${Theme.SPACING(60)} 0`,
        md: `${Theme.SPACING(30)} 0 ${Theme.SPACING(60)} 0`,
        lg: "",
        xl: "",
      }),
    },
  };

  const [mute, setMute] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    if (document.getElementById("video1")) {
      document.getElementById("video1").muted = mute;
    }
  }, [mute]);

  useEffect(() => {
    tempVids = VideoData.filter((video) => {
      return video.id !== activeVideo;
    });
  }, [activeVideo]);

  let tempVids = VideoData.filter((video) => {
    return video.id !== activeVideo;
  });

  return (
    <Flex style={styles.flex}>
      <Flex alignItems="flex-start" style={styles.indicatorCont}>
        <img
          src={Line}
          style={styles.indicator}
          alt="gameplay indicator"
          data-aos="slide-up"
          data-aos-delay="50"
        />
        <div style={styles.headline} data-aos="slide-up" data-aos-delay="150">
          <Headline text="GAMEPLAY" width="15rem" translateX="70px" />
        </div>
      </Flex>
      <Flex>
        <div>
          <div
            style={styles.activeCard}
            className="gameplayVideo"
            onClick={() => setMute(!mute)}
            data-aos="slide-up">
            <video
              style={styles.actvideo}
              className="video"
              // crossOrigin
              playsInline
              autoPlay
              muted
              id={`video${VideoData[activeVideo].id}`}
              controls={true}
              poster={VideoData[activeVideo].poster}>
              <source
                src={VideoData[activeVideo].source720p}
                type="video/mp4"
              />
              <source
                src={VideoData[activeVideo].source360p}
                type="video/mp4"
              />
            </video>
          </div>
          <div style={styles.watchOnText}>
            <Flex flexFlow="row">
              <div style={styles.userAccount} data-aos="slide-up">
                <img
                  src={VideoData[activeVideo].submitterIcon}
                  alt={VideoData[activeVideo].submittedBy}
                  title={VideoData[activeVideo].submittedBy}
                  style={{ width: "100%", borderRadius: "100px" }}
                  className="animateFromTop"
                />
              </div>
              <div
                className="animateFromTop"
                data-aos="slide-up"
                data-aos-delay="50">
                <div style={styles.streamerName} className="animateFromTop">
                  {VideoData[activeVideo].submittedBy}
                </div>
                <CustomLink
                  text="Stream full video on Youtube"
                  href={VideoData[activeVideo].submissionSource}
                  iconLink={true}></CustomLink>
              </div>
            </Flex>
          </div>
        </div>
        <Flex
          flexFlow={
            "xssmmd".includes(breakpoint.active) ? "row wrap" : "column wrap"
          }>
          {tempVids.map((video) => (
            <div
              key={video.id}
              style={styles.card}
              onClick={() => {
                setActiveVideo(video.id);
              }}
              data-aos="slide-up"
              data-aos-delay={"" + 50 * (video.id + 1)}
              className="gameplayVideo">
              <video
                style={styles.video}
                className="video"
                // crossOrigin
                playsInline
                autoPlay
                muted
                id={`video${video.id}`}
                controls={true}
                poster={video.poster}>
                <source src={video.source720p} type="video/mp4" />
                <source src={video.source360p} type="video/mp4" />
              </video>
            </div>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
