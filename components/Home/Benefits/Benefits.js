import React from "react";
import tw from "tailwind-styled-components";
import { benefits } from "../../../data/benefits";
import Benefit from "./Benefit";

export default function Benefits() {
  return (
    <Wrapper>
      <Container>
        {/* ====== StickyLeftContainer ====== */}

        <LeftStickyContainer>
          <Title>Get unstuck quicker by talking to a growth mentor</Title>
          <Subtitle>
            Have 1-on-1 conversations about growth, marketing, and everything in
            between with the world’s top 3% of startup and marketing mentors.
          </Subtitle>
          <ExploreMentorsButton>Explore Mentors</ExploreMentorsButton>
        </LeftStickyContainer>

        {/* ====== BenefitsContainer ====== */}

        <BenefitsContainer>
          {benefits.map((benefit, i) => (
            <Benefit key={benefit.id} benefit={benefit} index={i} />
          ))}
        </BenefitsContainer>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.section`
  pb-28
`;

const Container = tw.div`
  container-main
  w-full
  flex
  justify-between
  relative
`;

const LeftStickyContainer = tw.div`
  pt-28
  max-w-lg
  h-fit
  sticky
  top-0
`;

const BenefitsContainer = tw.div`
  space-y-12
  pt-28
`;

const Title = tw.h2`
  font-bold
  text-3xl
`;

const Subtitle = tw.p`
  pt-5
  pb-8
  text-[1.4rem]
`;

const ExploreMentorsButton = tw.button`
  py-3
  px-8
  text-white
  font-semibold
  bg-mentmeGreen
  rounded-md
`;
