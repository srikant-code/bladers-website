import Anirban from "../../assets/svgs/anirban.png";
import Aishika from "../../assets/svgs/aishika.png";
import Sanchit from "../../assets/svgs/sanchit.png";
import Srikant from "../../assets/svgs/srikant.png";
import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";
import { TeamMember } from "../../components/TeamMember";
import { Headline } from "../../components/Headline";

export const TeamBrahmos = () => {
  const styles = {
    image: { width: "20%", margin: "-35px" },
    paragraph: {
      marginLeft: Theme.SPACING(130),
      marginBottom: Theme.SPACING(-60),
    },
    contributorsLink: {
      marginTop: Theme.SPACING(-30),
      marginBottom: Theme.SPACING(60),
      marginLeft: Theme.SPACING(130),
      textDecoration: "underline",
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
      descp: "3D Modeller & UI Developer",
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
        <div
          id="AboutUs"
          style={{ padding: `${Theme.SPACING(100)} 7.5rem 0` }}>
          <Headline text="TEAM BRAHMOS" />
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
        <Flex style={{ padding: Theme.SPACING(120) }}>
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
          Click to see other contributors 👇
        </p>
      </Flex>
    </Flex>
  );
};
