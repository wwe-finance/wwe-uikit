import React from "react";
import styled from "styled-components";
import RugDocLock from "./icons/RugDocLock";

interface AuditProps {
  auditLink: string;
}

const StyledLock = styled.div`
  margin-bottom: 5px;
  text-align: center;

  svg {
    width: 100%;
  }
`;

const RugDocLockButton: React.FC<AuditProps> = ({ auditLink }) => {
  return (
    <StyledLock>
      <a href={auditLink} aria-label="LockLink" target="_blank">
        <RugDocLock />
      </a>
    </StyledLock>
    )
};

export default RugDocLockButton;
