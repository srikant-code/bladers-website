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
  };
  return (
    <Flex flexFlow="column">
      <div style={{}}>
        <Headline text="TEAM BRAHMOS" />
      </div>
      <Flex style={{ padding: Theme.SPACING(120) }}>
        <TeamMember
          src={Sanchit}
          alt="Sanchit's Profile"
          name="Sanchit Sharma"
          descp="Lead Unity Game Developer"
          linkedinLink="#"
          twitterLink="#"
        />
        <TeamMember
          src={Aishika}
          alt="Aishika's Profile"
          name="Aishika Das"
          descp="ASO & Unity Game Developer"
          linkedinLink="#"
          twitterLink="#"
        />
        <TeamMember
          src={Anirban}
          alt="Anirban's Profile"
          name="Anirban Das"
          descp="3D Modeller & UI Developer"
          linkedinLink="#"
          twitterLink="#"
        />
        <TeamMember
          src={Srikant}
          alt="Srikant's Profile"
          name="Srikant Sahoo"
          descp="Non-Digetic UI/UX Designer"
          linkedinLink="#"
          twitterLink="#"
        />
      </Flex>
    </Flex>
  );
};
