import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export default function SectorDevelopmentGroup({
  SectorDevelopmentData,
  border = "blue",
}) {
  return (
    <Wrapper>
      {SectorDevelopmentData.map((sectorDevelopment, i) => (
        <Container key={sectorDevelopment.id} $index={i}>
          <IconWrapper $border={border} >
            <IconContainer>
              <Image
                src={sectorDevelopment.icon}
                layout="fill"
                objectFit="contain"
                alt={sectorDevelopment.subSectorName}
              />
            </IconContainer>
          </IconWrapper>
          <SubsectorName>{sectorDevelopment.subSectorName}</SubsectorName>
        </Container>
      ))}
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
  max-w-2xl
  flex
  flex-wrap
  mt-10
`;

const Container = tw.div`
  mr-6
  w-[7.5rem]
  flex
  flex-col
  items-start
  ${(p) => (p.$index > 3 ? "mt-10" : "border-mentmeBlue")}
`;

const IconWrapper = tw.div`
  p-4
  border-2 
  rounded-xl
  ${(p) => (p.$border === "green" ? "border-mentmeGreen" : "border-mentmeBlue")}
`;

const IconContainer = tw.div`
  w-20
  h-20
  relative
`;

const SubsectorName = tw.span`
  mt-4
  max-w-[8rem]
  text-mentmeGray
`;
