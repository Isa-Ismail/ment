import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw from "tailwind-styled-components";

export default function MentorsDropDown({
  handleShowDropDownMenu,
  showDropDownMenu,
  menuName,
  borderRight,
}) {
  const buttonOnClickHandler = () => {
    if (menuName.toLowerCase() === "category") {
      handleShowDropDownMenu({
        showCategoryDropDownMenu: !showDropDownMenu.showCategoryDropDownMenu,
        showExpertiseDropDownMenu: false,
      });
    } else if (menuName.toLowerCase() === "expertise") {
      handleShowDropDownMenu({
        showExpertiseDropDownMenu: !showDropDownMenu.showExpertiseDropDownMenu,
        showCategoryDropDownMenu: false,
      });
    }
  };

  return (
    <Container $borderRight={borderRight}>
      <Button onClick={buttonOnClickHandler}>
        {menuName}{" "}
        <FontAwesomeIcon
          icon={faCaretDown}
          className="-mr-1 ml-1 sm:ml-2 h-4 w-4"
          aria-hidden="true"
        />
      </Button>
    </Container>
  );
}

// Tailwind styled components

const Container = tw.div`
  px-3
  sm:px-4
  py-2
  border
  border-mentmeGray
  rounded-lg
`;

const Button = tw.button`
  text-mentmeGray
`;
