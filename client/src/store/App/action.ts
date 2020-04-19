import { EXPANDED } from "./type";

export function setExpanded(name: string) {
  return {
    type: EXPANDED,
    payload: name,
  };
}
