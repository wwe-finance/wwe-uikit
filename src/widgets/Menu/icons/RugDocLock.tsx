import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface TechRateAuditProps extends SvgProps {
}

const RugDocLock: React.FC<TechRateAuditProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 376 127" {...props}>
      <image width="376" height="127" href='/images/egg/RugDocLock.png' />
    </Svg>
  )
};

export default RugDocLock;
