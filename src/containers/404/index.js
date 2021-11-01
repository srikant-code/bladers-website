import { Flex } from "../../components/Container";
import Desktop404 from "../../assets/images/desktop404.png";
import Tablet404 from "../../assets/images/tablet404.png";
import Phone404 from "../../assets/images/phone404.png";
import { ResponsiveEffect } from "../../Utils/Constants";

const NotFound = () => {
  return (
    // <Flex>
    //   {/* <p>
    //     Oops! the webpage you are looking for is not avaialble at this moment.
    //   </p>
    //   <p>Instead you can go back to home?</p>
    // <p>Or play our beautiful game in the meantime?</p> */}
    // </Flex>
    <div
      style={{
        background: `url(${ResponsiveEffect({
          xs: Phone404,
          sm: Phone404,
          md: Tablet404,
          lg: Desktop404,
          xl: Desktop404,
        })})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "99.6vw",
        height: "100vh",
        overflow: "hidden",
      }}
      id="404notfound"
    />
  );
};

export default NotFound;
