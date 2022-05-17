import React from "react";
import tw from "tailwind-styled-components";

export default function MenteeEnrollmentStep({ menteeEnrollmentStep }) {
  return (
    <Container>
      <NumberContainer>
        <Number>{menteeEnrollmentStep.no}.</Number>
      </NumberContainer>
      <TextContainer>{menteeEnrollmentStep.description}</TextContainer>
    </Container>
  );
}

// Tailwind styled components

const Container = tw.div`
  overflow-hidden
  
`;

const NumberContainer = tw.div`
  w-full
  bg-mentmeGreen
  w-14
  h-14
  rounded-full
  flex
  justify-center
  items-center
  relative
  after:absolute
  after:h-0.5
  after:w-[20rem]
  after:bg-mentmeBlue
  after:left-[4.5rem]
`;

const Number = tw.span`
  text-white
  text-2xl
  font-bold
`;

const TextContainer = tw.p`
  pt-5
  text-md
  font-semibold
`;
