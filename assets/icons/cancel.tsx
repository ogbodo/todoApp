import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgComponent(props: any) {
  return (
    <Svg viewBox="0 0 50 50" width="100" height="30" {...props}>
      <Circle cx={25} cy={25} r={25} fill="#001" />
      <Path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        d="M16 34l9-9 9-9M16 16l9 9 9 9"
      />
    </Svg>
  );
}

export default SvgComponent;
