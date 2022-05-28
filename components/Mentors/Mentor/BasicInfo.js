import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
    faClock,
    faMessage,
    faStar,
    faThumbsUp
} from "@fortawesome/free-regular-svg-icons";
import { faBasketball } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "tailwind-styled-components";
import Highlight from "./Highlight";

export default function BasicInfo({ mentorDetails }) {
  const {
    name,
    title,
    expertise,
    credits,
    image,
    perSessionVal,
    sessionDuration,
    appreciation,
    sessionCompleted,
    socials,
  } = mentorDetails;
  return (
    <Wrapper>
      <Container>
        <ContainerInner>
          {/* ====== Top Container - image, name, title, expertise, socials ====== */}

          <TopContainer>
            <ImageContainer>
              <Image src={image} layout="fill" objectFit="contain" alt={name} />
            </ImageContainer>
            <InfoContainerRight>
              <ExpertiseContainer>
                {expertise.map((expertiseSingle, index) => (
                  <Expertise key={expertiseSingle}>
                    #{expertiseSingle}
                    {expertise.length - 1 !== index && ","}{" "}
                  </Expertise>
                ))}
              </ExpertiseContainer>
              <NameTitleContainer>
                <Name>{name}</Name>
                <Title>{title}</Title>
              </NameTitleContainer>
              <SocialsContainer>
                {socials.github && (
                  <Link href={socials.github}>
                    <SocialLink>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className={socialIconClasses}
                        aria-hidden="true"
                      />
                    </SocialLink>
                  </Link>
                )}

                {socials.dribble && (
                  <Link href={socials.dribble}>
                    <SocialLink>
                      <FontAwesomeIcon
                        icon={faBasketball}
                        className={socialIconClasses}
                        aria-hidden="true"
                      />
                    </SocialLink>
                  </Link>
                )}

                {socials.linkedin && (
                  <Link href={socials.linkedin}>
                    <SocialLink>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className={socialIconClasses}
                        aria-hidden="true"
                      />
                    </SocialLink>
                  </Link>
                )}

                {socials.facebook && (
                  <Link href={socials.facebook}>
                    <SocialLink>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className={socialIconClasses}
                        aria-hidden="true"
                      />
                    </SocialLink>
                  </Link>
                )}
              </SocialsContainer>
            </InfoContainerRight>
          </TopContainer>

          {/* ====== Bottom Container - credits, perSessionVal, sessionDuration, appreciation, sessionCompleted ====== */}

          <BottomContainer>
            <Highlight
              icon={faStar}
              subtitle="Per session value"
              title="credits"
              number={credits}
            />
            <Highlight
              icon={faClock}
              subtitle="Session duration"
              title="Minutes"
              number={sessionDuration}
            />
            <Highlight
              icon={faThumbsUp}
              subtitle="Appreciated by"
              title="Mentees"
              number={appreciation}
            />
            <Highlight
              icon={faMessage}
              subtitle="Completed"
              title="Session"
              number={sessionCompleted}
            />
          </BottomContainer>
        </ContainerInner>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
`;

const Container = tw.div`
  container-main
  flex
  justify-center
`;

const ContainerInner = tw.div`
  flex
  flex-col
  items-start
  justify-start
`;

const TopContainer = tw.div`
  flex
  items-center
  space-x-3
  sm:space-x-6
`;

const ImageContainer = tw.div`
  w-[8rem]
  sm:w-[12rem]
  aspect-square
  relative
`;

const InfoContainerRight = tw.div`
  w-44
  sm:w-auto
`;

const ExpertiseContainer = tw.div`
  leading-[1]
`;

const Expertise = tw.span`
  text-[0.7rem]
  sm:text-sm
`;

const NameTitleContainer = tw.div`
  pt-3
  pb-3
`;

const Name = tw.h3`
  text-[0.9rem]
  sm:text-[1.1rem]
  font-bold
`;

const Title = tw.span`
  text-mentmeGray
  text-[0.8rem]
  sm:text-base
`;

const SocialsContainer = tw.div`
  space-x-2
`;

const SocialLink = tw.a``;

const BottomContainer = tw.div`
  flex
  justify-start
  space-x-2
  sm:space-x-2
  md:space-x-4
  lg:space-x-5
  pt-6
  sm:pt-8
`;

// Tailwind classes

const socialIconClasses = `h-5 sm:h-7 w-5 sm:w-7`;
