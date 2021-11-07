import { Flex } from "../../components/Container";
import Contributor from "../../components/Contributor";
import Theme from "../../Utils/theme";
import Tevfik from "../../assets/images/tevfik.jfif";
import Dimitri from "../../assets/images/dimitri.jpg";
import Tvisha from "../../assets/images/tvisha.jfif";
import Xorphilic from "../../assets/images/xorphilic.jfif";

const Contributors = () => {
  const Data = [
    {
      name: (
        <>
          Tvisha Thakur
          <div style={{ height: "30px" }} />
        </>
      ),
      link: "https://www.linkedin.com/in/tvisha-thakur-2090301a5/",
      image: Tvisha,
    },
    {
      name: "Tevfik Ufuk DEMİRBAŞ",
      link: "https://www.linkedin.com/in/tevfik-ufuk-demirba%C5%9F-85332857/",
      image: Tevfik,
    },
    {
      name: "Dmitriy Yukhanov - CodeStage",
      link: "https://twitter.com/dmitriy_focus",
      image: Dimitri,
    },
    {
      name: (
        <>
          XoRphilic
          <div style={{ height: "30px" }} />
        </>
      ),
      link: "https://www.linkedin.com/company/ar-hub09/",
      image: Xorphilic,
    },
  ];
  const styles = {
    flex: {
      width: "100%",
      marginBottom: Theme.SPACING(90),
      marginTop: Theme.SPACING(-50),
    },
  };
  return (
    <>
      <Flex style={styles.flex} animation="slide-up">
        {Data.map((contributor, index) => {
          return (
            <div data-aos="slide-up" data-aos-delay={index * 150}>
              <Contributor key={index} data={contributor} />
            </div>
          );
        })}
      </Flex>
    </>
  );
};

export default Contributors;
