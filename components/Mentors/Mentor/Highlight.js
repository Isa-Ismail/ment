import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import tw from "tailwind-styled-components";

export default function Highlight({ icon, subtitle, title, number }) {
  return (
    <Container>
      <FontAwesomeIcon
        icon={icon}
        className={socialIconClasses}
        aria-hidden="true"
      />
      <TextContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{number} {title}</Title>
      </TextContainer>
    </Container>
  );
}

// Tailwind styled components

const Container = tw.div`
  flex
  items-center
  space-x-[0.2rem]
  sm:space-x-2
  md:space-x-1.5
  bg-white
  py-1
  sm:py-2
  md:py-2
  px-1.5
  sm:px-3
  md:px-4
  rounded-md
  sm:rounded-lg
  md:rounded-xl
  shadow-md
`;

const TextContainer = tw.div``;

const Subtitle = tw.p`
  text-[1.3vw]
  sm:text-[0.6rem]
  md:text-[0.6rem]
  lg:text-xs
`;

const Title = tw.p`
  text-[0.4rem]
  sm:text-sm
  md:text-sm
  leading-1
  sm:leading-4
  md:leading-6
  font-medium
`;

// Tailwind classes

const socialIconClasses = `h-3 md:h-6 lg:h-7 w-3 md:w-6 lg:w-7`;
