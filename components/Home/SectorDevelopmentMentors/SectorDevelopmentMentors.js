import React from "react";
import tw from "tailwind-styled-components";
import {
  businessOrStartupDevelopmentMentors,
  personalDevelopmentMentors
} from "../../../data/sectorDevelopmentMentors";
import SectorDevelopmentGroup from "./SectorDevelopmentGroup";

export default function SectorDevelopmentMentors() {
  return (
    <Wrapper>
      <Container>
        {/* ====== LeftContainer - Business/Startup Development Mentors ====== */}
        
        <LeftContainer>
          <Title>Business/Startup Development Mentors</Title>
          <SectorDevelopmentGroup
            SectorDevelopmentData={businessOrStartupDevelopmentMentors}
          />
        </LeftContainer>

        {/* ====== RightContainer - Personal Development Mentors ====== */}

        <RightContainer>
          <Title>Personal Development Mentors</Title>
          <SectorDevelopmentGroup
            SectorDevelopmentData={personalDevelopmentMentors}
            border="green"
          />
        </RightContainer>
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
  flex
  justify-between
`;

const LeftContainer = tw.div`
`;
const RightContainer = tw(LeftContainer)``;

const Title = tw.h2`
  font-bold
  text-2xl
`
