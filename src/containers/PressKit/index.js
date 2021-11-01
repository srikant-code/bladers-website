import { Flex } from "../../components/Container";
import { CustomLink } from "../../components/Link";
import Theme from "../../Utils/theme";

const PressKit = () => {
  return (
    <Flex>
      <div
        style={{
          width: "80%",
          maxWidth: Theme.SPACING(620),
          margin: `${Theme.SPACING(140)} 0 ${Theme.SPACING(80)}`,
        }}>
        <h1 style={{ lineHeight: "1.4" }}>Press Kit</h1>
        <p>
          Download the below resource containing the brand assets like Brahmos
          logo, banners and game screenshots.
        </p>
        <hr />
        <CustomLink text="Download Logos" href="#0" type="internal" />
        <CustomLink
          text="Download Game Screenshots"
          href="#0"
          type="internal"
        />
        <CustomLink text="Figma Design file link" href="#0" type="internal" />
      </div>
    </Flex>
  );
};

export default PressKit;
