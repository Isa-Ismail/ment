import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";
import DropDownMenu from "./DropDownMenu";

export default function HeroSection() {
  return (
    <Wrapper>
      <Container>
        {/* ====== Texts, Category and Search bar ====== */}

        <LeftContainer>
          <MenteeMentorTextContainer>
            <MenteeText>Mentee</MenteeText>
            <MentorText>Mentor</MentorText>
          </MenteeMentorTextContainer>
          <Title>Learn and grow with help from world-class mentors</Title>
          <SubTitle>
            Book and meet over 6,336+ mentors for 1:1 mentorship in our global
            community.
          </SubTitle>
          <SearchContainer>
            <DropDownMenu menuName="Category" borderRight />
            <DropDownMenu menuName="Expertise" />
            <SearchBtn>Search</SearchBtn>
          </SearchContainer>
        </LeftContainer>

        {/* ====== Hero Section Image ====== */}

        <RightContainer>
          <Image
            src="/assets/hero_section/hero-section-img.png"
            layout="fill"
            objectFit="contain"
            alt="hero-img"
          />
        </RightContainer>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.section`
  min-h-screen
`;

const Container = tw.div`
  container-main
  pt-36
  flex
  justify-between
`;

const LeftContainer = tw.div`
  pt-32
`;

const RightContainer = tw.div`
  relative
  w-[40rem]
  h-[40rem]
`;

const MenteeMentorTextContainer = tw.div`
  pb-1
  space-x-3
  border-b
  border-gray-400
  inline-block
`;

const MenteeText = tw.span`
  pb-1
  text-lg
  text-mentmeBlue
  border-b-[3px]
  border-mentmeBlue
`;
const MentorText = tw.span`
  text-lg
`;

const Title = tw.h1`
  mt-8
  text-[3.2rem]
  font-bold
  max-w-[50rem]
  leading-[4.3rem]
`;

const SubTitle = tw.p`
  pt-8
  text-[1.4rem]
  max-w-xl
`;

const SearchBtn = tw.button`
  py-4
  px-8
  text-white
  font-semibold
  bg-mentmeGreen
  rounded-md
`;

const SearchContainer = tw.div`
  mt-10
  p-1.5
  bg-white
  inline-block
  rounded-md
  shadow-md
`;
