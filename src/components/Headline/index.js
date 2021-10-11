export const Headline = ({ text, height = "2.75rem", width = "10.8rem" }) => {
  return (
    <div style={{ height: height, width: width }}>
      <svg
        className="beyblade-font"
        style={{
          transform: "scale(2) translateX(45px) translateY(-10px)",
          width: width,
          height: height,
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <text
          stroke="url(#paint0_radial)"
          strokeWidth="6.1327"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Beyblade Metal Fight"
          fontSize="60"
          letterSpacing="0em">
          <tspan x="2.41315" y="31.0867">
            {text}
          </tspan>
        </text>
        <g filter="url(#filter0_d)">
          <text
            fill="url(#paint1_linear)"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Beyblade Metal Fight"
            fontSize="60"
            letterSpacing="0em">
            <tspan x="2.41315" y="31.0867">
              {text}
            </tspan>
          </text>
          <text
            stroke="white"
            strokeWidth="0.42654"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Beyblade Metal Fight"
            fontSize="60"
            letterSpacing="0em">
            <tspan x="2.41315" y="31.0867">
              {text}
            </tspan>
          </text>
        </g>
        <g filter="url(#filter1_d)">
          <text
            fill="url(#paint2_linear)"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Beyblade Metal Fight"
            fontSize="60"
            letterSpacing="0em">
            <tspan x="2.41315" y="31.0867">
              {text}
            </tspan>
          </text>
          <text
            stroke="white"
            strokeWidth="0.42654"
            xmlSpace="preserve"
            style={{ whiteSpace: "pre" }}
            fontFamily="Beyblade Metal Fight"
            fontSize="60"
            letterSpacing="0em">
            <tspan x="2.41315" y="31.0867">
              {text}
            </tspan>
          </text>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.34958"
            y="0.6102"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.65308" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="0.34958"
            y="1.6102"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.65308" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0.88 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(124.186 19.7524) rotate(90) scale(18.0915 122.472)">
            <stop stopColor="#272727" />
            <stop offset="0.0001" />
            <stop offset="1" stopColor="#1B1B1B" />
          </radialGradient>
          <linearGradient
            id="paint1_linear"
            x1="125.005"
            y1="1.66089"
            x2="125.005"
            y2="55.8438"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="0.427606" stopColor="#F5F9FC" />
            <stop offset="0.495316" stopColor="#A1C4E5" />
            <stop offset="0.615109" stopColor="#BCD5F1" />
            <stop offset="1" stopColor="#E4EEF8" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="125.005"
            y1="1.66089"
            x2="125.005"
            y2="55.8438"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="0.427606" stopColor="#F5F9FC" />
            <stop offset="0.495316" stopColor="#A1C4E5" />
            <stop offset="0.615109" stopColor="#BCD5F1" />
            <stop offset="1" stopColor="#E4EEF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
