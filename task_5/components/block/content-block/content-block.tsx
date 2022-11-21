import { FC } from "react";
import { HoverBlock, IHoverBlockProps } from "../block";

interface IProps extends IHoverBlockProps {
  content: string;
}

export const contentBlock: FC<IProps> = ({ mouseEnterCallback, content }) => {
  return (
    <HoverBlock mouseEnterCallback={mouseEnterCallback}>
      <p>{content}</p>
    </HoverBlock>
  );
};
