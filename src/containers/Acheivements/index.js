import DownloadBladersImage from "../../assets/svgs/phone_playstore_mockup.png";
import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { Icon } from "../../components/Icon";
import Theme, { ICONS_SVG } from "../../Utils/theme";
const Card = ({ value, parameter }) => {
  const styles = {
    value: {
      color: Theme.COLORS.colors.color_1,
      fontSize: Theme.SPACING(30),
      margin: `${Theme.SPACING(10)} 0`,
    },
    param: {
      margin: 0,
    },
    card: {
      padding: Theme.SPACING(30),
    },
  };
  return (
    <Flex flexFlow="column" alignItems="flex-start" style={styles.card}>
      <p style={styles.value}>{value}</p>
      <p style={styles.param}>{parameter}</p>
    </Flex>
  );
};

const Data = [
  {
    value: "+400000",
    param: "Downloads",
  },
  {
    value: "+10000",
    param: "Daily Active Users",
  },
  {
    value: "+20%",
    param: "Day 1 retention",
  },
  {
    value: "4.1 ⭐",
    param: "Stars on Playstore",
  },
  {
    value: "#1",
    param: "on bladers keyword",
  },
  {
    value: "+30",
    param: "In-app purchases",
  },
  {
    value: "~9min",
    param: "Session Length",
  },
];

export const Acheivements = () => {
  const styles = {
    mockup: { width: "30%" },
    playstore: { width: "" },
    appstore: { opacity: 0.4 },
    text: { lineHeight: 1, paddingTop: Theme.SPACING(20) },
    flex: {
      padding: Theme.SPACING(40),
      background: Theme.COLORS.gradient.gradient_1,
    },
    headline: {
      marginLeft: Theme.SPACING(-160),
      padding: Theme.SPACING(30),
    },
  };
  return (
    <Flex style={styles.flex} flexFlow="column">
      <div style={styles.headline}>
        <Headline text="OUR ACHIEVEMENTS" />
      </div>
      <Flex style={{ width: "100%" }}>
        {/* justifyContent="flex-start" */}
        {Data.map((item) => {
          return (
            <Card key={item.param} value={item.value} parameter={item.param} />
          );
        })}
      </Flex>
    </Flex>
  );
};
