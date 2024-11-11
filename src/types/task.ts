import { LinkProps } from "./link";
import { StatusProps } from "./status";

export interface TaskProps {
  id: string;
  ref: string;
  title: string;
  description: JSX.Element;
  status: StatusProps;
  required: boolean;
  links?: LinkProps[];
}
