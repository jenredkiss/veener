import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

interface Props {
  color: string
  size: number
}

function VBell(props: Props) {
  return (
    <Svg width={props.size} height={props.size}  viewBox="0 0 25 24" fill="none" >
      <Path d="M15.5 17H20.5L19.0951 15.5951C18.7141 15.2141 18.5 14.6973 18.5 14.1585V11C18.5 8.38757 16.8304 6.16509 14.5 5.34142V5C14.5 3.89543 13.6046 3 12.5 3C11.3954 3 10.5 3.89543 10.5 5V5.34142C8.16962 6.16509 6.5 8.38757 6.5 11V14.1585C6.5 14.6973 6.28595 15.2141 5.90493 15.5951L4.5 17H9.5M15.5 17V18C15.5 19.6569 14.1569 21 12.5 21C10.8431 21 9.5 19.6569 9.5 18V17M15.5 17H9.5" stroke={props.color} strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
    </Svg>

  )
}

export default VBell