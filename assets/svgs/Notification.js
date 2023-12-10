import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function Notification(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      {...props}>
      <G clipPath="url(#a)">
        <Path
          d="M18.333 16.667H1.667V15H2.5V9.192c0-4.156 3.358-7.525 7.5-7.525 4.142 0 7.5 3.369 7.5 7.525V15h.833v1.667zM7.917 17.5h4.166a2.083 2.083 0 01-4.166 0z"
          fill="#1293A9"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Notification;
