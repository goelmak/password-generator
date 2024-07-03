import ProgressBar from "./ProgressBar";
import CheckedProperty from "./CheckedProperty";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { propertiesState } from "../store/atom";

const Properties = () => {
  const [strength, setStrength] = useState("");
  const properties = useRecoilValue(propertiesState);

  useEffect(() => {
    const length = properties.length;
    if (length < 4) {
      setStrength("poor");
    } else if (length < 8) {
      setStrength("week");
    } else if (length < 12) {
      setStrength("good");
    } else if (length < 16) {
      setStrength("strong");
    } else {
      setStrength("very strong");
    }
  }, [properties.length]);

  return (
    <div className="flex flex-col space-y-8">
      <ProgressBar></ProgressBar>
      <div className="flex justify-between p-2">
        <div className="flex flex-col">
          <CheckedProperty property="Include UpperCase Letter" />
          <CheckedProperty property="Include Numbers" />
        </div>
        <div className="flex flex-col">
          <CheckedProperty property="Include Symbols" />
          <CheckedProperty property="Include LowerCase Letter" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-white text-xl">Strength :</div>
        <div className="font-bold text-xl text-white">{strength}</div>
      </div>
    </div>
  );
};
export default Properties;
