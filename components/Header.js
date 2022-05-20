import { ViewGridIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
export default function Header() {
  const [navBgOnScroll, setNavBgOnScroll] = useState(false);

  const handlenavBgOnScroll = () => {
    if (window.scrollY >= 60) {
      setNavBgOnScroll(true);
    } else {
      setNavBgOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlenavBgOnScroll);

    return () => window.removeEventListener("scroll", handlenavBgOnScroll);
  }, []);

  return (
    <Wrapper $bg={navBgOnScroll}>
      <Container>
        <NavLogo>
          <Link href='/'>
            <Image
              src="/assets/logo/logo.svg"
              objectFit="contain"
              layout="fill"
              alt="demo-image"
            />
          </Link>
        </NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink>
              <NavBtnMentorCat>
                <ViewGridIcon className={viewGridIconClasses} /> Mentor
                Categories
              </NavBtnMentorCat>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Become a mentor</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blogs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <Link href = '/login'>
              <NavLinkLogin>
                <NavBtnLogin>Login</NavBtnLogin>
              </NavLinkLogin>
            </Link>
          </NavItem>
        </NavMenu>
        <HamburgerIcon>
          <Image
            src="/assets/hamburger-icon.svg"
            layout="fill"
            objectFit="contain"
            alt="hamburger-icon"
          />
        </HamburgerIcon>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.header`
  py-8
  z-40
  fixed
  inset-x-0
  transition-all
  ease-in-out
  duration-200
  ${(p) => p.$bg && "bg-white py-6 shadow-md"}
`;

const Container = tw.nav`
  container-main
  flex
  justify-between
  items-center
`;

const NavLogo = tw.div`
  w-40
  h-12
  relative
  cursor-pointer
`;

const NavMenu = tw.ul`
  flex
  items-center
  space-x-8
  hidden
  xl:inline-flex
`;

const HamburgerIcon = tw.div`
  relative
  w-10
  h-10
  xl:hidden
  cursor-pointer
`;

const NavItem = tw.li``;

const NavLink = tw.a`
  text-lg
`;

const NavLinkLogin = tw(NavLink)`
  ml-8
`;

const NavBtnMentorCat = tw.button`
  py-1.5
  px-5
  font-semibold
  bg-white
  rounded-md
  shadow-md
  flex
  items-center
`;

const NavBtnLogin = tw.button`
  py-3
  px-8
  text-white
  font-semibold
  bg-mentmeGreen
  rounded-md
`;

// Tailwind classes

const viewGridIconClasses = `h-5 w-5 text-black mr-2`;
