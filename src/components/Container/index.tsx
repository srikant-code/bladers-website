interface Props {
  children: any;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
  flexFlow?: string;
  display?: string;
  style?: any;
}

export const Flex: React.FC<Props> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
  alignContent = "center",
  flexFlow = "row wrap",
  display = "flex",
  style,
}) => {
  const styles = {
    flex: {
      display: display,
      justifyContent: justifyContent,
      alignItems: alignItems,
      alignContent: alignContent,
      flexFlow: flexFlow,
      ...style,
    },
  };
  return <div style={styles.flex}>{children}</div>;
};
