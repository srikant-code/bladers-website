import useWindowDimensions from "./Hooks/useWindowDimensions";

export const Pxtorem = (num) => {
  return num / 16 + "rem";
};

export const CONSTANTS = {
  DOWNLOAD_BLADERS_LINK:
    "https://play.google.com/store/apps/details?id=com.gamersngame.BladersAR&hl=en_IN&gl=US&ref=bladers_website",
  DISCORD_JOIN_LINK: "https://discord.gg/qkWvACPEPf",
  BUG_REPORT_LINK: "https://forms.gle/FVV7zRjCiz1b1qsD6",
};

export const ResponsiveEffect = (breakpoints) => {
  const { breakpoint } = useWindowDimensions();
  return breakpoints[breakpoint.active];
};

export const ROUTES = {
  PRIVACY_POLICY_ROUTE: "/privacy-policy",
  CHANGE_LOG_ROUTE: "/change-log",
  PRESS_KIT_ROUTE: "/press-kit",
  HOME_ROUTE: "/",
};
