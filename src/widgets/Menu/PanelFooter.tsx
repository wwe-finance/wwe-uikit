import React from "react";
import styled, { useTheme } from "styled-components";
import { FriendTokenIcon, PancakeRoundIcon, CogIcon, SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps { }

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.sidebarBackground};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  friendPriceUsd,
  currentLang,
  langs,
  setLang,
  friendPriceLink,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  const theme = useTheme()
  
  return (
    <Container>
      <SettingsEntry>
        {cakePriceUsd ? (
          <PriceLink href={priceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color={theme.nav.textColor} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        {friendPriceUsd ? (
          <PriceLink href={friendPriceLink} target="_blank">
            <FriendTokenIcon width="24px" mr="8px" />
            <Text color={theme.nav.textColor} bold>{`$${friendPriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
        {/* <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
      </SettingsEntry>
      <SocialEntry>
        {socials.map((social, index) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "23px", color: "primary", style: { cursor: "pointer" } };
          const mr = index < socials.length - 1 ? "8px" : 0;
          return (
            <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
              <Icon {...iconProps} />
            </Link>
          );
        })}
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
