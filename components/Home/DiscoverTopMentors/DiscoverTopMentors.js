import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tw from "tailwind-styled-components";
import { mentors } from "../../../data/mentors";
import MentorCard from "./MentorCard";
import Link from "next/link";

export default function DiscoverTopMentors() {
  const slider = useRef();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Wrapper>
      <Container>
        {/* ====== Top Container - Title, Explore all button and indicator arrows ====== */}

        <TopContainer>
          <Title>Discover Top Mentors</Title>
          <ExploreWithIndicator>
          <Link href ='/mentors'><ExploreButton>Explore All</ExploreButton></Link>
            <IndicatorContainer>
              <LeftArrow onClick={() => slider?.current?.slickPrev()}>
                <ChevronLeftIcon className={indicatorArrowClasses} />
              </LeftArrow>
              <RightArrow onClick={() => slider?.current?.slickNext()}>
                <ChevronRightIcon className={indicatorArrowClasses} />
              </RightArrow>
            </IndicatorContainer>
          </ExploreWithIndicator>
        </TopContainer>

        {/* ====== Bottom Container - Mentors row ====== */}

        <BottomContainer>
          <Slider ref={slider} {...sliderSettings}>
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </Slider>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.section`
  py-24
  bg-white
`;

const Container = tw.div`
  container-main
`;

const TopContainer = tw.div`
  flex
  items-center
  justify-between
`;

const Title = tw.h2`
  font-bold
  text-2xl
`;

const ExploreWithIndicator = tw.div`
  flex
  space-x-4
`;

const ExploreButton = tw.button`
  h-10
  border
  border-mentmeGray
  px-4
  py-1
  rounded-md
  text-lg
`;

const IndicatorContainer = tw.div`
  flex
  space-x-2
`;

const LeftArrow = tw.div`
  w-10
  h-10
  border
  border-mentmeGray
  rounded-md
  flex
  justify-center
  items-center
  cursor-pointer
`;

const RightArrow = tw(LeftArrow)``;

const BottomContainer = tw.div`
  mt-10
  cursor-pointer
`;

// Tailwind classes

const indicatorArrowClasses = `h-10 w-10`;
