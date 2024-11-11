import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Search = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke="#808080"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-search"
    {...props}>
    <Path d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.83879 10.5217 8.06586 9.72656 9.01962L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.68 14.0271 13.4106 14.0464 13.2157 13.9114L13.1464 13.8536L9.01962 9.72656C8.06586 10.5217 6.83879 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1Z" />
  </Svg>
);
export default Search;
