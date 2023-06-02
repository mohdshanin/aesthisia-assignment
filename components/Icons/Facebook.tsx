import React from 'react';

function FacebookIcon(props: any) {
  const { pathProps, ...rest } = props || {};
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M5.45 2.325H6.625V0.337503C6.05609 0.278345 5.48447 0.249138 4.9125 0.250003C3.2125 0.250003 2.05 1.2875 2.05 3.1875V4.825H0.131248V7.05H2.05V12.75H4.35V7.05H6.2625L6.55 4.825H4.35V3.40625C4.35 2.75 4.525 2.325 5.45 2.325Z"
        fill="white"
        {...pathProps}
      />
    </svg>
  );
}

export default FacebookIcon;
