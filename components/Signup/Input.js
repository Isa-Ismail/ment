import React from "react";
import tw from "tailwind-styled-components";

export default function Input({
  label,
  name,
  placeholder,
  value,
  type,
  handleInputValue,
}) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Inpt
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => handleInputValue(e)}
      />
    </InputContainer>
  );
}

// Tailwind styled components

const InputContainer = tw.div`
  flex
  flex-col
`;

const Label = tw.span`
  text-sm
`;

const Inpt = tw.input`
  text-black
  w-full
  rounded-lg
  py-3.5
  px-4
  mt-2
  border
  border-gray-300
  focus:outline-none
`;
