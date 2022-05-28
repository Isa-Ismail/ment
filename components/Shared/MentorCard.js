import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import urlSlug from "url-slug";

export default function MentorCard({ mentor }) {
  return (
    <Wrapper>
      <Container>
        <Link href={`/mentors/${urlSlug(mentor.name)}`}>
          <ImageLink>
            <ImageContainer>
              <Image
                src={mentor.image}
                layout="fill"
                objectFit="contain"
                alt={mentor.name}
              />
            </ImageContainer>
          </ImageLink>
        </Link>
        <DetailsContainer>
          <ExpertiseContainer>
            {mentor.expertise.map((expertiseSingle, index) => (
              <Expertise key={expertiseSingle}>
                #{expertiseSingle}
                {mentor.expertise.length - 1 !== index && ","}{" "}
              </Expertise>
            ))}
          </ExpertiseContainer>
          <NameTitleContainer>
            <Name>{mentor.name}</Name>
            <Title>{mentor.title}</Title>
          </NameTitleContainer>
          <CreditsAvailabilityContainer>
            <Credits>
              <StarIcon className={starIconClasses} /> {mentor.credits} credits
            </Credits>
            <AvailabilityButton>Check Availability</AvailabilityButton>
          </CreditsAvailabilityContainer>
        </DetailsContainer>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
`;

const Container = tw.div`
  w-full
  px-3
  2xl:px-5
`;

const ImageContainer = tw.div`
  w-full
  aspect-square
  relative
`;

const ImageLink = tw.a``;

const DetailsContainer = tw.div`
`;

const ExpertiseContainer = tw.div`
  pt-4
  leading-[1]
`;

const Expertise = tw.span`
  text-sm
`;

const NameTitleContainer = tw.div`
  pt-3
  pb-3
  border-b-2
  border-gray-300
`;

const Name = tw.h3`
  text-[1.1rem]
  font-bold
`;

const Title = tw.span`
  text-mentmeGray
  text-base
`;

const CreditsAvailabilityContainer = tw.div`
  pt-3
  flex
  justify-between
  items-center
`;

const Credits = tw.span`
  text-mentmeGray  
  text-sm
  flex
  items-center
`;

const AvailabilityButton = tw.button`
  bg-mentmeGreen
  text-white
  text-sm
  rounded-md
  px-3
  py-2
`;

// Tailwind classes

const starIconClasses = `h-5 w-5 text-mentmeGreen mr-1`;
