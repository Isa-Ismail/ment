import React from "react";
import tw from "tailwind-styled-components";

export default function Button({ btnName, bgColor }) {
  return (
    <Btn $btnName={btnName}>
      {(btnName === "Google" || btnName === "Facebook") && "Continue with"}{" "}
      {btnName}
    </Btn>
  );
}

// Tailwind styled components

const Btn = tw.button`
    py-3.5
    text-white
    w-full
    rounded-lg
    shadow-md
    ${(p) => p.$btnName === "Google" && "bg-[#5A91F4]"}
    ${(p) => p.$btnName === "Facebook" && "bg-[#3285BE]"}
    ${(p) => p.$btnName === "Create my account" && "bg-[#72C04C]"}
`;
