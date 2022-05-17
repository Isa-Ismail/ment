import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import tw from "tailwind-styled-components";
import { testimonials } from "../../../data/testimonials";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const slider = useRef();
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    beforeChange: (oldIndex, newIndex) => setSliderIndex(newIndex),
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
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
        <Title>Get unstuck quicker by talking to a growth mentor</Title>
        <TestimonialsContainer>
          <Slider ref={slider} {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </TestimonialsContainer>
        <IndicatorContainer>
          <LeftArrow onClick={() => slider?.current?.slickPrev()}>
            <ChevronLeftIcon className={indicatorArrowClasses} />
          </LeftArrow>

          <SliderDotsContainer>
            {testimonials.map((testimonial, index) => (
              <SliderDot
                key={testimonial.id}
                onClick={() => {
                  slider?.current?.slickGoTo(index);
                }}
                $sliderDotStyle={sliderIndex === index}
              />
            ))}
          </SliderDotsContainer>

          <RightArrow onClick={() => slider?.current?.slickNext()}>
            <ChevronRightIcon className={indicatorArrowClasses} />
          </RightArrow>
        </IndicatorContainer>
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

const TestimonialsContainer = tw.div`
  mt-10
  cursor-pointer
`;

const IndicatorContainer = tw.div`
  pt-14
  flex
  justify-center
  items-center
  space-x-6
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

const SliderDotsContainer = tw.div`
  h-fit
  flex
  space-x-[0.8rem]
`;

const SliderDot = tw.div`
  w-[1.2rem]
  h-[1.2rem]
  ${(p) => (p.$sliderDotStyle ? "bg-mentmeGray" : "border-2 border-mentmeGray")}
  border
  border-mentmeGray
  rounded-full
  cursor-pointer
  transition-all 
  ease-in-out 
  duration-100
`;

// Tailwind classes

const indicatorArrowClasses = `h-10 w-10`;
