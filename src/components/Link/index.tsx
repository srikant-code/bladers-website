import Theme from "../../Utils/theme";
import { Icon } from "../Icon";

interface Props {
  text: string;
  href: string;
  width?: number;
  iconLink?: boolean;
  icon?: {
    name: string;
    svg: JSX.Element;
    css: {
      "& > *": {
        fill: string;
        stroke: string;
      };
      "& path": {
        fill: string;
        stroke: string;
      };
    };
  };
}

export const CustomLink: React.FC<Props> = ({
  text,
  href,
  icon,
  width,
  iconLink,
}) => {
  const styles = {
    link: {
      color: Theme.COLORS.shades.color_8,
      textDecoration: "none",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      maxWidth: Theme.SPACING(550),
      width: Theme.SPACING(width ? width : iconLink ? "fit-content" : 300),
      transition: "all 0.3s ease-in-out",
    },
  };
  return (
    <a
      href={href}
      className="link"
      style={styles.link}
      target="_blank"
      rel="noreferrer noopener">
      {icon ? <Icon icon={icon} /> : null}
      {text}
    </a>
  );
};
