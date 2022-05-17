import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <FooterTop>
          <LogoWithTextContainer>
            <NavLogo>
              <Image
                src="/assets/logo/logo.svg"
                objectFit="contain"
                layout="fill"
                alt="demo-image"
              />
            </NavLogo>
            <FooterText>
              To inspire powerful conversations and collaborations among members
              worldwide so together we can change the world with creativity.
            </FooterText>
          </LogoWithTextContainer>

          <SocialsContainer>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className={socialIconClasses}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className={socialIconClasses}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className={socialIconClasses}
              aria-hidden="true"
            />
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className={socialIconClasses}
              aria-hidden="true"
            />
          </SocialsContainer>
        </FooterTop>

        <FooterBottom>
          <NavigationContainer>
            <NavigationLeftContainer>
              <NavMenu>
                <NavItem>
                  <NavLink>find mentor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>become a mentor</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>community</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>blog</NavLink>
                </NavItem>
              </NavMenu>
            </NavigationLeftContainer>
            <NavigationRightContainer>
              <NavMenu>
                <NavItem>
                  <NavLink>joint mentme</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>FAQs</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>helpcenter</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>partnerships</NavLink>
                </NavItem>
              </NavMenu>
            </NavigationRightContainer>
          </NavigationContainer>
          <FooterPrivacy>
            <Copyright>Copyright 2022 - Mentme</Copyright>
            <PrivacyContainer>
              <PrivacyList>
                <PrivacyItem>Contact us</PrivacyItem>
                <PrivacyItem>Privacy Policy</PrivacyItem>
                <PrivacyItem>Terms of use</PrivacyItem>
                <PrivacyItem>Sitemap</PrivacyItem>
              </PrivacyList>
            </PrivacyContainer>
          </FooterPrivacy>
        </FooterBottom>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.footer`
  py-16
  bg-white
`;

const Container = tw.div`
  container-main
`;

const FooterTop = tw.div`
  w-full
  flex
  justify-between
`;

const LogoWithTextContainer = tw.div`
  flex
  items-center
  pb-6
  border-b
  border-gray-300
`;

const NavLogo = tw.div`
  w-32
  h-12
  relative
`;

const FooterText = tw.p`
  pl-8
  max-w-2xl
  text-sm
`;

const SocialsContainer = tw.div`
  space-x-2
`;

const FooterBottom = tw.div`
  w-full
  pt-6
`;

const NavMenu = tw.ul`
  flex
  items-center
  space-x-8
`;

const NavItem = tw.li``;

const NavLink = tw.a`
  text-base
  font-bold
`;

const NavigationContainer = tw.div`
  flex
  justify-between
`;

const NavigationLeftContainer = tw.div``;

const NavigationRightContainer = tw.div``;

const FooterPrivacy = tw.div`
  flex
  justify-between 
  mt-5
  text-sm
  text-mentmeGray
  font-medium
`;

const Copyright = tw.div``;

const PrivacyContainer = tw.div``;

const PrivacyList = tw.ul`
  flex
  space-x-4
`;

const PrivacyItem = tw.li``;



// Tailwind classes

const socialIconClasses = `h-7 w-7`