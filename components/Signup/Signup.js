import Link from "next/link";
import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Button from "./Button";
import Input from "./Input";

export default function Signup() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputValue = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Wrapper>
      <Container>
        <ContainerInner>
          <SocialButtonContainer>
            <Button btnName="Google" bgColor="#5A91F4" />
            <Button btnName="Facebook" bgColor="#5A91F4" />
          </SocialButtonContainer>
          <InputContainer>
            <Input
              label="Your name"
              name="name"
              type="text"
              placeholder="First name and last name"
              value={inputValue.name}
              handleInputValue={handleInputValue}
            />
            <Input
              label="Email address"
              name="email"
              type="text"
              placeholder="First name and last name"
              value={inputValue.email}
              handleInputValue={handleInputValue}
            />
            <Input
              label="Phone number"
              name="phone"
              type="text"
              placeholder="First name and last name"
              value={inputValue.phone}
              handleInputValue={handleInputValue}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="First name and last name"
              value={inputValue.password}
              handleInputValue={handleInputValue}
            />
          </InputContainer>
          <CreateAccountButtonContainer>
            <Button btnName="Create my account" bgColor="#5A91F4" />
          </CreateAccountButtonContainer>
          <TextContainer>
            <Text>
              By continuing, you agree to the Terms of use, Privacy Policy, and
              Community Standards of Mentme
            </Text>
            <Text>
              Already have an account?{" "}
              <LoginSpan>
                <Link href="/login">
                  <LoginLink>Log in</LoginLink>
                </Link>
              </LoginSpan>
            </Text>
          </TextContainer>
        </ContainerInner>
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
  flex
  justify-center
`;

const ContainerInner = tw.div`
  w-[22rem]
`;

const SocialButtonContainer = tw.div`
  flex
  flex-col
  space-y-5
`;

const InputContainer = tw.div`
  space-y-5
  mt-5
`;

const CreateAccountButtonContainer = tw.div`
  mt-5
`;

const TextContainer = tw.div`
  mt-5
  space-y-3
`;

const Text = tw.p`
  text-mentmeGray
  text-center
  text-sm
`;

const LoginSpan = tw.span`
  text-mentmeBlue
  font-bold
`;

const LoginLink = tw.a`
  cursor-pointer
`;
