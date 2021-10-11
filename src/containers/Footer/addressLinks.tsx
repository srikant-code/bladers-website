import { Flex } from "../../components/Container";
import { Headline } from "../../components/Headline";
import { CustomLink } from "../../components/Link";
import { ICONS_SVG } from "../../Utils/theme";

export const AddressLinks: React.FC<any> = ({ style }) => {
  return (
    <Flex alignItems="flex-start" style={style}>
      <Flex flexFlow="column wrap" alignItems="flex-start">
        <Headline text="CONTACT US" />
        <CustomLink text="abc@bladers.co" href="#" icon={ICONS_SVG.email} />
        <CustomLink
          text="2nd Floor, Ascendas Park Square Mall, ITPL, Whitefield, Bengaluru, India"
          href="#"
          icon={ICONS_SVG.location}
        />
      </Flex>
    </Flex>
  );
};
