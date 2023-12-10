// SvgIcons.jsx
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export function UserIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.594 11.795c.369-.134.672-.258.908-.371.413-.2.811-.425 1.123-.736.563-.563-1.125-.563-1.125-3.376 0-1.874.75-2.812 2.25-2.812S15 5.438 15 7.313c0 2.812-1.688 2.812-1.125 3.375C15 11.812 17.25 11.812 17.25 13.5m-16.5 0c0-1.688 2.25-1.688 3.375-2.813C4.688 10.126 3 10.126 3 7.313 3 5.438 3.75 4.5 5.25 4.5s2.25.938 2.25 2.813c0 2.812-1.688 2.812-1.125 3.375C7.5 11.812 9.75 11.812 9.75 13.5h-9z"
        stroke="#1293A9"
        strokeLinecap="square"
      />
      <Path
        d="M9 12c.275-.093.473-.161.594-.205"
        stroke="#1293A9"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function KeyIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M15.75 12V9H9m-3.75 3a3 3 0 100-6 3 3 0 000 6zm7.5-.75V9"
        stroke="#1293A9"
        strokeLinecap="square"
      />
    </Svg>
  );
}
