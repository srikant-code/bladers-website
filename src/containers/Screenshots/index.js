import { Headline } from "../../components/Headline";
import { ResponsiveEffect } from "../../Utils/Constants";

const { useState, useRef, useEffect } = require("react");
const { Flex } = require("../../components/Container");
const { default: Theme } = require("../../Utils/theme");

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 4400;

export const ScreenshotSlideshow = () => {
  const [index, setIndex] = useState(0);
  const JSON = [
    {
      alt: "New player profile and statistics",
    },
    {
      alt: "1v1 online multiplayer battles",
    },
    {
      alt: "Select your beyblade and defeat your opponent",
    },
    {
      alt: "Bring your dragon and destroy your opponent",
    },
    {
      alt: "Upgrade and battle with new beyblades",
    },
    {
      alt: "Get exciting rewards and offers",
    },
    {
      alt: "Invite your friends or play with random players",
    },
    {
      alt: "Mega update 2.0 is released",
    },
  ];
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === JSON.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Flex flexFlow="column">
      <div data-aos="slide-up" data-aos-delay={50}>
        <Headline text="GAME SCREENSHOTS" width="11.8rem" translateX="0" />
      </div>
      <div
        className="slideshow"
        id="GameScrenshots"
        data-aos="slide-up"
        data-aos-delay={150}>
        <Flex
          flexFlow="row"
          className="slideshowSlider"
          style={{
            width: "800%",
            transform: `translate3d(${
              -index *
              ResponsiveEffect({
                xs: 100 / 8,
                sm: 100 / 8,
                md: 100 / 8,
                lg: 100 / 8,
                xl: 100 / 8,
              })
            }%, 0, 0)`,
          }}>
          {JSON.map((item, index) => (
            <Flex style={{ width: "100%" }}>
              <img
                className="slide"
                key={index}
                style={{
                  marginRight: Theme.SPACING(15),
                  marginLeft: Theme.SPACING(15),
                  boxShadow:
                    "0px 19.6232px 54.2522px 5.77152px rgba(0, 0, 0, 0.75)",
                  borderRadius: "12px",
                  border: `${Theme.COLORS.colors.color_1} solid 1px`,
                  width: ResponsiveEffect({
                    xs: "95%",
                    sm: "95%",
                    md: "97%",
                    lg: "87%",
                    xl: "65%",
                  }),
                }}
                src={
                  require(`../../assets/images/screen${index + 1}.png`).default
                }
                alt={JSON[index].alt}
              />
            </Flex>
          ))}
        </Flex>

        <div className="slideshowDots">
          {JSON.map((_, idx) => (
            <div
              data-aos="slide-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={idx * 50}>
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};

// const Screenshots = ({ activeImage }) => {
//   return (
//     <Flex
//       style={{ width: "50%", paddingBottom: Theme.SPACING(100) }}
//       justifyContent="flex-end">
//       <img
//         className="animateFromTop"
//         style={{
//           marginRight: Theme.SPACING(30),
//           boxShadow: "0px 19.6232px 54.2522px 5.77152px rgba(0, 0, 0, 0.75)",
//           borderRadius: "12px",
//           border: `${Theme.COLORS.colors.color_1} solid 1px`,
//         }}
//         src={
//           require(`../../assets/images/screen${activeImage + 1}.png`).default
//         }
//         alt={JSON[activeImage].topic}
//       />
//     </Flex>
//   );
// };
