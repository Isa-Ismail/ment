import Image from "next/image";
import React from "react";
import tw from "tailwind-styled-components";

export default function ResourcesAndBlog({ resourceAndBlog }) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={resourceAndBlog.image}
          layout="fill"
          objectFit="cover"
          alt={resourceAndBlog.name}
        />
      </ImageContainer>
      <TextContainer>
        <CategoryDateContainer>
          <CategoryDate>
            <Category>{resourceAndBlog.category}</Category> -{" "}
            <Date>{resourceAndBlog.date}</Date>
          </CategoryDate>
        </CategoryDateContainer>
        <Title>{resourceAndBlog.title}</Title>
        <ShortDescription>{resourceAndBlog.shortDescription}</ShortDescription>
      </TextContainer>
    </Container>
  );
}

// Tailwind styled components

const Container = tw.div`
`;

const ImageContainer = tw.div`
  w-full
  rounded-lg
  overflow-hidden
  aspect-video
  relative
`;

const TextContainer = tw.div`
  
`;

const CategoryDateContainer = tw.div`
  mt-5
  text-sm
`;

const CategoryDate = tw.p``;

const Category = tw.span`
  uppercase
  font-bold
  text-pink-600
`;

const Date = tw.span`
  font-bold
`;

const Title = tw.h3`
  font-bold
  mt-5
`;

const ShortDescription = tw.p`
  mt-3
  text-mentmeGray
  font-medium
`;
