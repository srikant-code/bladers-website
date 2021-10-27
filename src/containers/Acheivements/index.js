import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { ResponsiveEffect } from "../../Utils/Constants";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import Theme from "../../Utils/theme";
const Card = ({ value, parameter }) => {
  const styles = {
    value: {
      color: Theme.COLORS.shades.color_2,
      fontSize: Theme.SPACING(30),
      margin: `${Theme.SPACING(10)} 0`,
    },
    param: {
      margin: 0,
      color: Theme.COLORS.colors.color_2,
    },
    card: {
      padding: ResponsiveEffect({
        xs: Theme.SPACING(20),
        md: Theme.SPACING(40),
        sm: Theme.SPACING(40),
        lg: Theme.SPACING(40),
        xl: Theme.SPACING(40),
      }),
      width: Theme.SPACING(156),
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
  [
    {
      value: "#1",
      param: "on bladers keyword",
    },
    {
      value: "+400000",
      param: "Downloads",
    },
    {
      value: "+10000",
      param: "Daily Active Users",
    },
  ],
  [
    {
      value: "+20%",
      param: "Day 1 retention",
    },
    {
      value: (
        <>
          4.1{" "}
          <span style={{ fontStyle: "normal", fontSize: "inherit" }}>⭐</span>
        </>
      ),
      param: "Stars on Playstore",
    },
    // {
    //   value: "+30",
    //   param: "In-app purchases",
    // },
    {
      value: "~9min",
      param: "Session Length",
    },
  ],
];

export const Acheivements = () => {
  const { breakpoint } = useWindowDimensions();
  const styles = {
    mockup: { width: "30%" },
    playstore: { width: "" },
    appstore: { opacity: 0.4 },
    text: { lineHeight: 1, paddingTop: Theme.SPACING(20) },
    flex: {
      padding: Theme.SPACING(120),
      background: Theme.COLORS.gradient.gradient_4,
    },
    headline: {
      marginLeft: Theme.SPACING(-160),
      padding: Theme.SPACING(30),
    },
  };
  return (
    <Flex style={styles.flex} flexFlow="column">
      <div style={styles.headline}>
        <Headline text="OUR ACHIEVEMENTS" width="11.8rem" />
      </div>
      <Flex
        style={{ width: "100%" }}
        flexFlow={"xssmmd".includes(breakpoint.active) ? "row" : "column"}>
        {/* justifyContent="flex-start" */}
        {Data.map((item, index) => {
          return (
            <Flex key={index}>
              {item.map((card) => {
                return (
                  <Card
                    key={card.param}
                    value={card.value}
                    parameter={card.param}
                  />
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
