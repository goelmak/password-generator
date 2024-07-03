import { useRecoilValue, useSetRecoilState } from "recoil";
import { passwordState, propertiesState } from "../store/atom";

const GeneratePassword = () => {
  const setPassword = useSetRecoilState(passwordState);
  const { length, checkedProperties } = useRecoilValue(propertiesState);

  const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    '"',
    "'",
    "<",
    ">",
    ",",
    ".",
    "?",
    "/",
    "|",
  ];

  const handlePasswordCreation = () => {
    if (
      length === 0 ||
      length < checkedProperties.length ||
      checkedProperties.length === 0
    ) {
      setPassword("");
      console.log("Invalid password criteria");
    } else {
      let str = "";
      for (let i = 0; i < length; i++) {
        const property = checkedProperties[i % checkedProperties.length];
        switch (property) {
          case "Include UpperCase Letter":
            str += String.fromCharCode(generateRandomNumber(65, 90));
            break;
          case "Include LowerCase Letter":
            str += String.fromCharCode(generateRandomNumber(97, 122));
            break;
          case "Include Numbers":
            str += String.fromCharCode(generateRandomNumber(48, 57));
            break;
          case "Include Symbols":
            str +=
              specialCharacters[
                generateRandomNumber(0, specialCharacters.length - 1)
              ];
            break;
          default:
            break;
        }
      }
      setPassword(str);
      console.log("Generated Password:", str);
    }
  };

  return (
    <button
      className="w-full rounded bg-gray-200 hover:bg-gray-300 font-medium text-purple-900 p-2"
      onClick={handlePasswordCreation}
    >
      Generate Password
    </button>
  );
};

export default GeneratePassword;
