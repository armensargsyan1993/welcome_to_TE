import { FC } from "react";
import { HoverBlock, IHoverBlockProps } from "../hover-block";

interface IProps extends IHoverBlockProps {
  src: string;
  alt: string;
}

export const ImgBlock: FC<IProps> = ({ mouseEnterCallback, ...rest }) => {
  return (
    <HoverBlock mouseEnterCallback={mouseEnterCallback}>
      <img {...rest} />
    </HoverBlock>
  );
};
