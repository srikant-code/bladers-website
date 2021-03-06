import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { ResponsiveEffect } from "../../Utils/Constants";
import useWindowDimensions from "../../Utils/Hooks/useWindowDimensions";
import Theme from "../../Utils/theme";
import FireBG from "../../assets/images/fire.png";
const Card = ({ value, parameter }) => {
  const styles = {
    value: {
      color: Theme.COLORS.shades.color_8,
      // color: Theme.COLORS.shades.color_2,
      fontSize: Theme.SPACING(30),
      margin: `${Theme.SPACING(10)} 0`,
    },
    param: {
      margin: 0,
      color: Theme.COLORS.colors.color_8,
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
      <p style={styles.value} data-aos="slide-up" data-aos-delay={100}>
        {value}
      </p>
      <p style={styles.param} data-aos="slide-up" data-aos-delay={200}>
        {parameter}
      </p>
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
      background: `url(${FireBG}), linear-gradient(358deg, rgb(154, 105, 94) 1.4%, rgb(0, 6, 6) 98.45%)`,
      boxShadow: "rgb(151 58 1) 0px -60px 48px -23px inset",
      // boxShadow: "0px -60px 48px -23px #ff8845 inset",
      backgroundBlendMode: "multiply",
      backgroundRepeat: "no-repeat",
      backgroundSize: ResponsiveEffect({
        xs: "auto 100%",
        sm: "auto 100%",
        md: "auto 100%",
        lg: "100% auto",
        xl: "100% auto",
      }),
      // background: Theme.COLORS.gradient.gradient_4,
    },
    headline: {
      marginLeft: Theme.SPACING(-160),
      padding: Theme.SPACING(30),
    },
  };
  return (
    <Flex style={styles.flex} flexFlow="column">
      <div style={styles.headline} data-aos="slide-up" data-aos-delay={150}>
        <Headline text="OUR ACHIEVEMENTS" width="11.8rem" />
      </div>
      <Flex
        style={{ width: "100%" }}
        flexFlow={"xssmmd".includes(breakpoint.active) ? "row" : "column"}>
        {/* justifyContent="flex-start" */}
        {Data.map((item, index) => {
          return (
            <Flex key={index} animation="slide-up" animationDelay={index * 50}>
              {item.map((card, i) => {
                return (
                  <div data-aos="slide-up" data-aos-delay={i * 200}>
                    <Card
                      key={card.param}
                      value={card.value}
                      parameter={card.param}
                    />
                  </div>
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
