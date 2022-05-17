import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export default function Benefit({ benefit, index }) {
  return (
    <Container>
      <IconContainer>
        <Image
          src={benefit.icon}
          layout="fill"
          objectFit="contain"
          alt={benefit.name}
        />
      </IconContainer>
      <TextContainer>
        <Name>{benefit.name}</Name>
        <Description>{benefit.description}</Description>
      </TextContainer>
    </Container>
  );
}

// Tailwind styled components

const Container = tw.div`
  flex
  max-w-2xl
  pb-14
  border-b-2
  border-gray-300
`;

const IconContainer = tw.div`
  w-32
  aspect-square
  relative
`;

const TextContainer = tw.div`
  pl-10
`;

const Name = tw.h2`
  font-bold
  text-2xl
  pb-2.5
`;

const Description = tw.p`
  text-lg
`;
