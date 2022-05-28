import React, { useState } from "react";
import tw from "tailwind-styled-components";
import { mentors } from "../../data/mentors";
import MentorCard from "../Shared/MentorCard";
import MentorsDropDown from "./MentorsDropDown";

export default function Mentors() {
  const [showDropDownMenu, setShowDropDownMenu] = useState({
    showCategoryDropDownMenu: false,
    showExpertiseDropDownMenu: false,
  });

  const handleShowDropDownMenu = (obj) => {
    setShowDropDownMenu((prevState) => ({ ...prevState, ...obj }));
  };

  return (
    <Wrapper>
      <Container>
        <MentorsDropDownContainer>
          <MentorsDropDown
            handleShowDropDownMenu={handleShowDropDownMenu}
            showDropDownMenu={showDropDownMenu}
            menuName="Category"
          />
          <MentorsDropDown
            handleShowDropDownMenu={handleShowDropDownMenu}
            showDropDownMenu={showDropDownMenu}
            menuName="Expertise"
          />
          <MentorsDropDown
            handleShowDropDownMenu={handleShowDropDownMenu}
            showDropDownMenu={showDropDownMenu}
            menuName="Sort By"
          />
          <MentorsDropDown
            handleShowDropDownMenu={handleShowDropDownMenu}
            showDropDownMenu={showDropDownMenu}
            menuName="Rating"
          />
        </MentorsDropDownContainer>
        <ContainerInner>
          {mentors.map((mentor, i) => (
            <MentorCardContainer key={mentor.id} $index={i}>
              <MentorCard mentor={mentor} />
            </MentorCardContainer>
          ))}
        </ContainerInner>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
  min-h-screen
  py-40
`;

const MentorsDropDownContainer = tw.div`
  pl-3
  2xl:pl-5
  flex
  space-x-5
  mb-16
`;

const Container = tw.div`
  container-main
`;

const ContainerInner = tw.div`
  w-full
  flex
  flex-wrap
  justify-center
`;

const MentorCardContainer = tw.div`
  sm:w-1/2
  lg:w-1/3
  xl:w-1/4
  ${(p) => p.$index > 0 && "mt-16"}
  ${(p) => p.$index === 1 && "sm:mt-0"}
  ${(p) => p.$index > 1 && "sm:mt-16"}
  ${(p) => p.$index === 2 && "lg:mt-0"}
  ${(p) => p.$index > 2 && "lg:mt-16"}
  ${(p) => p.$index === 3 && "xl:mt-0"}
`;
