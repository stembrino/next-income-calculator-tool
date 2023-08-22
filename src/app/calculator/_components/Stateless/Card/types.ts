import { TagProps } from "./Tag/types";

export type Info = TagProps & { id: string }
export type CardProps = {
  title: string;
  percentage: number;
  info: Info[];
}