import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function BackIcon(props: any) {
  return (
    <Svg viewBox="0 0 200 50" width="100" height="30" {...props}>
      <G fill="grey">
        <Path d="M27 1c14.359 0 26 11.641 26 26S41.359 53 27 53 1 41.359 1 27 12.641 1 27 1z" />
        <Path d="M27 54C12.112 54 0 41.888 0 27S12.112 0 27 0s27 12.112 27 27-12.112 27-27 27zm0-52C13.215 2 2 13.215 2 27s11.215 25 25 25 25-11.215 25-25S40.785 2 27 2z" />
      </G>
      <Path
        d="M31.706 40a.997.997 0 01-.707-.293L19.501 28.209a1.711 1.711 0 010-2.418l11.498-11.498a.999.999 0 111.414 1.414L21.12 27l11.293 11.293A.999.999 0 0131.706 40z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BackIcon;
