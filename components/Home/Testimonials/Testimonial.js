import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export default function Testimonial({ testimonial }) {
  return (
    <Wrapper>
      <Container>
        <ContainerInner>
          {/* ====== TopContainer - Image, name and position ====== */}

          <TopContainer>
            <ImageContainer>
              <ImageContainerInner>
                <Image
                  className={imageClasses}
                  src={testimonial.image}
                  layout="fill"
                  objectFit="cover"
                  alt={testimonial.name}
                />
              </ImageContainerInner>
            </ImageContainer>
            <NamePositionContainer>
              <Name>{testimonial.name}</Name>
              <Position>{testimonial.position}</Position>
            </NamePositionContainer>
          </TopContainer>

          {/* ====== BottomContainer - Message ====== */}

          <BottomContainer>
            <Message>{testimonial.message}</Message>
          </BottomContainer>
        </ContainerInner>
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
  pt-16
`;

const Container = tw.div`
  w-full
  px-3
  2xl:px-5
  
`;

const ContainerInner = tw.div`
  bg-white
  p-7
  rounded-xl
`;

const TopContainer = tw.div`
  flex
  items-end
  relative
`;

const ImageContainer = tw.div`
  absolute
  bottom-0
  left-0
`;

const ImageContainerInner = tw.div`
  w-24
  aspect-[3.5/4]
  relative
  rounded-xl
  border-[0.2rem]
  border-white
  overflow-hidden
`;

const NamePositionContainer = tw.div`
  pl-28
`;

const Name = tw.h3`
  font-bold
`;

const Position = tw.p`
  text-mentmeGray
  text-sm
`;

const BottomContainer = tw.div`
  pt-5
`;

const Message = tw.p``;



// Tailwind classes

const imageClasses = ``