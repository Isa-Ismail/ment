import React from "react";
import tw from "tailwind-styled-components";
import { faqs } from "../../../data/faqs";
import FAQ from "./FAQ";

export default function FAQs() {
  return (
    <Wrapper>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <ContainerInner>
          <FAQContainer>
            {faqs.map((faq, i) => (
              <FAQ key={faq.id} faq={faq} index={i} />
            ))}
          </FAQContainer>
        </ContainerInner>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.section`
  py-24
`;

const Container = tw.div`
  container-main
`;

const Title = tw.h2`
  font-bold
  text-3xl
  max-w-lg
`;

const ContainerInner = tw.div`
  bg-white
  mt-10
  py-12 
  px-4 
  sm:py-14
  sm:px-6 
  lg:px-8
  rounded-xl
`;

const FAQContainer = tw.div`
  max-w-3xl 
  mx-auto 
  space-y-8 
  divide-y 
  divide-gray-300
`;
