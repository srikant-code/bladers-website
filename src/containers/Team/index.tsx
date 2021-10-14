import Anirban from "../../assets/svgs/anirban.png";
import Aishika from "../../assets/svgs/aishika.png";
import Sanchit from "../../assets/svgs/sanchit.png";
import Srikant from "../../assets/svgs/srikant.png";
import { Flex } from "../../components/Container";
import Theme from "../../Utils/theme";

export const TeamBrahmos = () => {
  const styles = {
    image: { width: "20%", margin: "-35px" },
  };
  return (
    <Flex style={{ padding: Theme.SPACING(120) }}>
      <img src={Sanchit} alt="Sanchit's Profile" style={styles.image}></img>
      <img src={Aishika} alt="Aishika's Profile" style={styles.image}></img>
      <img src={Anirban} alt="Anirban's Profile" style={styles.image}></img>
      <img src={Srikant} alt="Srikant's Profile" style={styles.image}></img>
    </Flex>
  );
};
