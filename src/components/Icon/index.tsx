import Theme from "../../Utils/theme";

interface Props {
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
const styles = {
  icon: {
    padding: Theme.SPACING(6),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};
export const Icon: React.FC<Props> = ({ icon }) => {
  return (
    <span className="icon" style={styles.icon} title={icon.name}>
      {icon.svg}
    </span>
  );
};
