import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import urlSlug from "url-slug";
import { mentors } from "../../../data/mentors";
import BasicInfo from "./BasicInfo";

export default function Mentor({ mentorSlug }) {
  const [mentorDetails, setMentorDetails] = useState({});

  useEffect(() => {
    const foundMentor = mentors.find(
      (mentor) => urlSlug(mentor.name) === mentorSlug
    );
      setMentorDetails(foundMentor)
  }, [mentorSlug]);

  return (
    <Wrapper>
      <Container>
        {mentorDetails?.name && (
          <ContainerInner>
            <BasicInfo mentorDetails={mentorDetails} />
          </ContainerInner>
        )}
      </Container>
    </Wrapper>
  );
}

// Tailwind styled components

const Wrapper = tw.div`
  min-h-screen
  py-40
`;

const Container = tw.div`
  container-main
`;

const ContainerInner = tw.div``;
