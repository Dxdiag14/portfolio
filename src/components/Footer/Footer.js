import React from 'react';
import { AiFillBehanceCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { FaCoffee } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="footer">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <span>0931-094-2271</span>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <span>hjmiranda02@gmail.com</span>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer />
        <SocialContainer>
          <SocialIcons href="https://github.com/Dxdiag14">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hj-miranda-b20039204/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.behance.net/hjmiranda">
            <AiFillBehanceCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
