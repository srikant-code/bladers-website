import Theme from "../../Utils/theme";

interface Props {
  style?: any;
  icon: {
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
export const Icon: React.FC<Props> = ({ icon, style }) => {
  const styles = {
    icon: {
      padding: Theme.SPACING(6),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      ...style,
    },
  };
  return (
    <span className="icon" style={styles.icon} title={icon.name}>
      {icon.svg}
    </span>
  );
};
