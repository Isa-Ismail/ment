import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import tw from "tailwind-styled-components";

export default function FAQ({ faq, index }) {
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Disclosure as="div" className={`${index !== 0 && "pt-6"}`}>
      {({ open }) => (
        <>
          <QuestionContainer>
            <Disclosure.Button className={DisclosureButtonClasses}>
              <Question>{faq.question}</Question>
              <DownArrowIconContainer className="">
                <ChevronDownIcon
                  className={classNames(
                    open ? "-rotate-180" : "rotate-0",
                    "h-6 w-6 transform"
                  )}
                  aria-hidden="true"
                />
              </DownArrowIconContainer>
            </Disclosure.Button>
          </QuestionContainer>
          <Transition
            enter="transition duration-200 ease-in"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="div" className={DisclosurePanelClasses}>
              <Answer>{faq.answer}</Answer>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

// Tailwind styled components

const QuestionContainer = tw.div``;

const Question = tw.h3`
  font-medium 
  text-black
`;

const DownArrowIconContainer = tw.span`
  ml-6 
  h-7 
  flex 
  items-center
`;

const Answer = tw.p`
  text-mentmeGray
`;



// Tailwind classes

const DisclosureButtonClasses = `text-left w-full flex justify-between items-start text-mentmeGray`;

const DisclosurePanelClasses = `mt-4 pr-12`;
