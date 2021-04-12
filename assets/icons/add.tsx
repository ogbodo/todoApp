import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function AddIcon(props: any) {
  return (
    <Svg viewBox="0 0 50 50" width="100" height="30" {...props}>
      <Circle cx={25} cy={25} r={25} fill="#43b05c" />
      <Path
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M25 13v25M37.5 25h-25"
      />
    </Svg>
  );
}

export default AddIcon;
