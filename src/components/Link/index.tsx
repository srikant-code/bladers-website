import { Link } from "react-router-dom";
import Theme from "../../Utils/theme";
import { Icon } from "../Icon";

interface Props {
  text?: string | JSX.Element;
  href: string;
  width?: number;
  iconLink?: boolean;
  children?: JSX.Element;
  justifyContent?: string;
  alignItems?: string;
  sameTab?: boolean;
  removeArrow?: boolean;
  type?: "email" | "internal";
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
  children,
  justifyContent,
  sameTab,
  type,
  removeArrow,
  alignItems,
}) => {
  const styles = {
    link: {
      color: Theme.COLORS.shades.color_8,
      textDecoration: removeArrow ? "" :"none" ,
      display: "flex",
      justifyContent: justifyContent ? justifyContent : "flex-start",
      alignItems: alignItems ? alignItems : "center",
      maxWidth: Theme.SPACING(550),
      width: Theme.SPACING(width ? width : iconLink ? "fit-content" : 300),
      transition: "all 0.3s ease-in-out",
    },
  };
  return type !== "internal" ? (
    <a
      href={type === "email" ? `mailto:${text}` : href}
      className={removeArrow ? "" : "link"}
      style={styles.link}
      target={sameTab ? "" : "_blank"}
      rel="noreferrer noopener">
      {icon ? <Icon icon={icon} /> : null}
      {text}
      {children ? children : null}
    </a>
  ) : (
    <Link to={href} className={removeArrow ? "" : "link"} style={styles.link}>
      {icon ? <Icon icon={icon} /> : null}
      {text}
      {children ? children : null}
    </Link>
  );
};
