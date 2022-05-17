import React from "react";
import tw from "tailwind-styled-components";
import { menteeEnrollmentSteps } from "../../../data/menteeEnrollmentSteps";
import MenteeEnrollmentStep from "./MenteeEnrollmentStep";

export default function MenteeEnrollmentSteps() {
  return (
    <Wrapper>
      <Container>
        {menteeEnrollmentSteps.map((menteeEnrollmentStep) => (
          <MenteeEnrollmentStep
            key={menteeEnrollmentStep.no}
            menteeEnrollmentStep={menteeEnrollmentStep}
          />
        ))}
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
  flex
  justify-between
  space-x-12
`;
