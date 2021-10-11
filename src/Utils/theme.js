// import KeyShortcuts from "../components/atomic/keyShortcuts";
// import KEY_SHORTCUTS from "./keyShortcuts";
import { ReactComponent as Contact } from "../assets/svgs/contact.svg";
import { ReactComponent as Developer } from "../assets/svgs/developer.svg";
import { ReactComponent as Discord } from "../assets/svgs/discord.svg";
import { ReactComponent as Download } from "../assets/svgs/download.svg";
import { ReactComponent as Email } from "../assets/svgs/email.svg";
import { ReactComponent as Feedback } from "../assets/svgs/feedback.svg";
import { ReactComponent as Location } from "../assets/svgs/location.svg";
import { ReactComponent as Park } from "../assets/svgs/park.svg";
import { ReactComponent as Phone } from "../assets/svgs/phone.svg";
import { ReactComponent as Privacy } from "../assets/svgs/privacy.svg";
import { ReactComponent as Video } from "../assets/svgs/video.svg";
import { Pxtorem } from "./Constants";
// default theme

//TODO: Change it to Cabin

const common = {
  text: "C4C4C4",
  fontProperties: {
    color: "#C4C4C4",
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: "152.02%",
    /* or 24px */
    // fontFeatureSettings: 'salt' on;
  },
};

let COLORS = {
  shades: {
    color_1: "#000000", // pure black
    color_2: "#342E2D", // black
    color_3: "#727272", // black-text
    color_4: "#9B9B9B", // grey
    color_5: "#E2E2E2", // lightgrey
    color_6: "#EEEDED", // faintgrey
    color_7: "#F8F9FA", // ghostwhite
    color_8: "#FFFFFF", // white
  },
  workspace: {
    color_1: "#222222", // black
    color_2: "#3778FF", // metab-bluw
    color_3: "#48B2FF", // sky-blue
    color_4: "#F6D00C", // green
    color_5: "#FBC400", // yellow
    color_6: "#FF602E", // red
  },
  metab: {
    color_1: "#3778FF", // primary
    color_2: "#48B2FF", // secondary
  },
  colors: {
    color_1: "#56D00C", // green
    color_2: "#EF243D", // red
    color_3: "#FF5C9C", // pink
    color_4: "#7B61FF", // violet
  },
  gradient: {
    gradient_1: `linear-gradient(231.57deg, #000000 11.82%, #005D6A 82.4%)`, // footer
    gradient_2: `linear-gradient(231.57deg, #005D6A 11.82%, #000000 82.4%)`, // download_component
  },
  effects: {
    subtle_blue: {
      background: common.text,
      boxShadow: `0px 3px 7px rgba(0, 99, 216, 0.11)`,
    },
    bluish: {
      background: common.text,
      boxShadow: `0px 1px 4px rgba(0, 49, 152, 0.2), 0px 4px 5px rgba(0, 65, 125, 0.32), 0px 1px 25px rgba(55, 120, 255, 0.3)`,
    },
    big_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.32), 0px 11px 55px rgba(0, 0, 0, 0.3)`,
    },
    medium_blur: {
      background: common.text,
      boxShadow: `0px 11px 16px rgba(0, 0, 0, 0.12), 0px 1px 65px rgba(0, 0, 0, 0.21)`,
    },
  },
  icons: {
    color_1: "#56D00C", // black
  },
};
const FONTS = {
  cabin: {
    heading: {
      bold: {
        fontWeight: "bold",
        fontSize: "16px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "16px",
        ...common.fontProperties,
      },
    },
    subHeading: {
      bold: {
        fontWeight: "bold",
        fontSize: "14px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "14px",
        ...common.fontProperties,
      },
    },
    subText: {
      bold: {
        fontWeight: "bold",
        fontSize: "12px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "12px",
        ...common.fontProperties,
      },
    },
    small: {
      bold: {
        fontWeight: "bold",
        fontSize: "10px",
        ...common.fontProperties,
      },
      regular: {
        fontWeight: "normal",
        fontSize: "10px",
        ...common.fontProperties,
      },
      italic: {
        fontWeight: "normal",
        fontSize: "16px",
        ...common.fontProperties,
        fontStyle: "italic",
      },
    },
    ultraSmall: {
      bold: {
        fontWeight: "normal",
        fontSize: "9px",
        ...common.fontProperties,
      },
    },
  },
};
const SPACING = (spacing) => {
  return Pxtorem(spacing);
};

const Theme = {
  COLORS,
  FONTS,
  SPACING,
};
console.log("themes");

const changeColors = (color1, color2, color3, color4) => {
  return {
    "& > *": {
      fill: color1,
      stroke: color2,
    },
    "& path": {
      fill: color3,
      stroke: color4,
    },
  };
};

export let ICONS_SVG = {
  contact: {
    svg: <Contact />,
    name: "Contact",
    css: changeColors(
      null,
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1
    ),
    // popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.back}</KeyShortcuts>,
  },
  developer: {
    svg: <Developer />,
    name: "Developer",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
    // popOverContent: <KeyShortcuts>{KEY_SHORTCUTS.screenshot}</KeyShortcuts>,
  },
  discord: {
    svg: <Discord />,
    name: "Discord",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  downloads: {
    svg: <Download />,
    name: "Downloads",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  email: {
    svg: <Email />,
    name: "Email",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  feedback: {
    svg: <Feedback />,
    name: "Feedback",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  location: {
    svg: <Location />,
    name: "Location",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  park: {
    svg: <Park />,
    name: "Park",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  phone: {
    svg: <Phone />,
    name: "Phone",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  privacy: {
    svg: <Privacy />,
    name: "Privacy",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
  video: {
    svg: <Video />,
    name: "Video",
    css: changeColors(
      Theme.COLORS.icons.color_1,
      null,
      Theme.COLORS.icons.color_1,
      null
    ),
  },
};

export default Theme;
