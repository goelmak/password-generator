import React from "react";
import { useSetRecoilState } from "recoil";
import { propertiesState } from "../store/atom";

interface CheckedPropertyProps {
  property: string;
}

const CheckedProperty: React.FC<CheckedPropertyProps> = ({ property }) => {
  const setProperties = useSetRecoilState(propertiesState);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;
    console.log(checked);
    if (checked) {
      setProperties((properties) => {
        const temp = {
          length: properties.length,
          checkedProperties: [...properties.checkedProperties, property],
        };
        console.log(temp);
        return temp;
      });
    } else {
      setProperties((properties) => {
        const temp = properties.checkedProperties.filter(
          (item) => item !== property
        );
        return {
          ...properties,
          checkedProperties: temp,
        };
      });
    }
  };

  return (
    <div className="flex flex-row space-x-2">
      <input type="checkbox" onChange={handleCheck}></input>
      <div className="text-white font-bold text-xl">{property}</div>
    </div>
  );
};

export default CheckedProperty;
