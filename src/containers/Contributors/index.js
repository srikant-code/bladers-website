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
      name: "Tvisha Thakur",
      link: "https://www.linkedin.com/in/tvisha-thakur-2090301a5/",
      image: Tvisha,
    },
    {
      name: "XoRphilic",
      link: "https://www.linkedin.com/company/ar-hub09/",
      image: Xorphilic,
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
      <Flex style={styles.flex}>
        {Data.map((contributor, index) => {
          return <Contributor key={index} data={contributor} />;
        })}
      </Flex>
    </>
  );
};

export default Contributors;