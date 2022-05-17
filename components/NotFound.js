import React from "react";
import tw from "tailwind-styled-components";

export default function NotFound() {
  return (
    <Wrapper>
      <Container>
        <Text>404, Sorry page not found!</Text>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
    relative 
    container 
    mx-auto 
    px-4
    sm:px-5
    md:px-10
    lg:px-20
    xl:px-32
    2xl:px-52
`;

const Container = tw.div`
    flex
    justify-center
`;

const Text = tw.h1``;
