import React from "react";
import tw from "tailwind-styled-components";
import { resourcesAndBlogs } from "../../../data/resourcesAndBlogs";
import ResourcesAndBlog from "./ResourcesAndBlog";

export default function ResourcesAndBlogs() {
  return (
    <Wrapper>
      <Container>
        <Title>Resources and blogs</Title>
        <ResourcesAndBlogsContainer>
          {resourcesAndBlogs.map((resourceAndBlog) => (
            <ResourcesAndBlog
              key={resourceAndBlog.id}
              resourceAndBlog={resourceAndBlog}
            />
          ))}
        </ResourcesAndBlogsContainer>
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

const ResourcesAndBlogsContainer = tw.div`
  bg-white
  mt-10
  px-9
  py-9
  rounded-xl
  border
  border-mentmeBlue
  flex
  justify-between
  space-x-10
`;
