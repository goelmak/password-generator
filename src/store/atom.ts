import { atom } from "recoil";

export const propertiesState = atom<{
  checkedProperties: string[];
  length: number;
}>({
  key: "properties",
  default: { length: 0, checkedProperties: [] },
});

export const passwordState = atom<string>({
  key: "password",
  default: "",
});
