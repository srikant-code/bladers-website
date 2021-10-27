import Anirban from "../../assets/svgs/anirban.png";
import Aishika from "../../assets/svgs/aishika.png";
import Sanchit from "../../assets/svgs/sanchit.png";
import Srikant from "../../assets/svgs/srikant.png";
import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import { TeamMember } from "../../components/TeamMember";
import { Headline } from "../../components/Headline";
import { ResponsiveEffect } from "../../Utils/Constants";

export const TeamBrahmos = () => {
  const styles = {
    image: { width: "20%", margin: "-35px" },
    paragraph: {
      marginLeft: ResponsiveEffect({
        xs: `0`,
        sm: `${Theme.SPACING(120)} 0`,
        md: Theme.SPACING(130),
        lg: Theme.SPACING(130),
        xl: Theme.SPACING(130),
      }),
      marginBottom: Theme.SPACING(-60),
    },
    contributorsLink: {
      // marginTop: Theme.SPACING(-30),
      marginBottom: Theme.SPACING(90),
      marginLeft: Theme.SPACING(130),
      textDecoration: "underline",
    },
    heading: {
      padding: ResponsiveEffect({
        xs: `${Theme.SPACING(60)} 0 ${Theme.SPACING(10)} 0`,
        sm: `${Theme.SPACING(60)} 0 ${Theme.SPACING(10)} 0`,
        md: `${Theme.SPACING(100)} 7.5rem 0`,
        lg: `${Theme.SPACING(100)} 7.5rem 0`,
        xl: `${Theme.SPACING(100)} 7.5rem 0`,
      }),
    },
  };
  const Data = [
    {
      src: Sanchit,
      alt: "Sanchit's Profile",
      name: "Sanchit Sharma",
      descp: "Lead Unity Game Developer",
      linkedin: "",
      twitter: "",
    },
    {
      src: Aishika,
      alt: "Aishika's Profile",
      name: "Aishika Das",
      descp: "ASO & Unity Game Developer",
      linkedin: "",
      twitter: "",
    },
    {
      src: Anirban,
      alt: "Anirban's Profile",
      name: "Anirban Das",
      descp: "Digetic UI Developer & 3D Modeller",
      linkedin: "",
      twitter: "",
    },
    {
      src: Srikant,
      alt: "Srikant's Profile",
      name: "Srikant Sahoo",
      descp: "Non-Digetic UI/UX Designer",
      linkedin: "",
      twitter: "",
    },
  ];
  return (
    <Flex flexFlow="column">
      <Flex flexFlow="column" alignItems="flex-start">
        <Flex
          flexFlow="column"
          style={{ width: "100%" }}
          alignItems={ResponsiveEffect({
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          })}>
          <div id="AboutUs" style={styles.heading}>
            <Headline
              text="TEAM BRAHMOS"
              width="8.8rem"
              translateX={ResponsiveEffect({
                xs: "0",
                sm: "0",
                md: "35px",
                lg: "35px",
                xl: "35px",
              })}
            />
          </div>
          <p style={styles.paragraph}>
            This paragraph is itself about us.
            <br />
            We are a team of college students...
            <br />
            ..
            <br />
            ..
            <br />
            ..
            <br />
            ..
          </p>
        </Flex>
        <Flex
          style={{
            padding: ResponsiveEffect({
              xs: `${Theme.SPACING(120)} 0`,
              sm: `${Theme.SPACING(120)} 0`,
              md: Theme.SPACING(120),
              lg: Theme.SPACING(120),
              xl: Theme.SPACING(120),
            }),
          }}>
          {Data.map((member) => {
            return (
              <TeamMember
                key={member.descp}
                src={member.src}
                alt={member.alt}
                name={member.name}
                descp={member.descp}
                linkedinLink={member.linkedin}
                twitterLink={member.twitter}
              />
            );
          })}
        </Flex>
        <p style={styles.contributorsLink}>
          Click to see people who have helped us 👇
        </p>
      </Flex>
    </Flex>
  );
};
