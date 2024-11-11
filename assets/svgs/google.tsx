import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const GoogleIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M18.7509 10.1943C18.7509 9.47489 18.6913 8.94989 18.5624 8.40546H10.1794V11.6526H15.1C15.0009 12.4596 14.4652 13.6749 13.2747 14.4915L13.258 14.6002L15.9085 16.6125L16.0921 16.6305C17.7786 15.104 18.7509 12.8582 18.7509 10.1943Z"
      fill="#4285F4"
    />
    <Path
      d="M10.1789 18.75C12.5896 18.75 14.6133 17.9722 16.0915 16.6305L13.2741 14.4916C12.5201 15.0069 11.5082 15.3666 10.1789 15.3666C7.81779 15.3666 5.81385 13.8402 5.0995 11.7305L4.99479 11.7392L2.23874 13.8295L2.2027 13.9277C3.67093 16.786 6.6868 18.75 10.1789 18.75Z"
      fill="#34A853"
    />
    <Path
      d="M5.10002 11.7305C4.91153 11.1861 4.80244 10.6027 4.80244 9.99998C4.80244 9.39716 4.91153 8.81385 5.0901 8.26941L5.08511 8.15346L2.29451 6.0296L2.20321 6.07216C1.59808 7.25829 1.25085 8.59026 1.25085 9.99998C1.25085 11.4097 1.59808 12.7416 2.20321 13.9277L5.10002 11.7305Z"
      fill="#FBBC05"
    />
    <Path
      d="M10.1789 4.63331C11.8555 4.63331 12.9864 5.34303 13.6313 5.93612L16.1511 3.525C14.6035 2.11528 12.5896 1.25 10.1789 1.25C6.68682 1.25 3.67094 3.21387 2.2027 6.07218L5.0896 8.26943C5.81387 6.15972 7.81782 4.63331 10.1789 4.63331Z"
      fill="#EB4335"
    />
  </Svg>
);
export default GoogleIcon;
