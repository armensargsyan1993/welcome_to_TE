import { ReactNode } from "react";
import { useState, FC } from "react";

interface IProps {
  children: ReactNode;
}

export interface IHoverBlockProps {
  mouseEnterCallback: () => void;
}

export const HoverBlock: FC<IHoverBlockProps & IProps> = ({
  mouseEnterCallback,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const mouseEnterHandler = () => {
    setIsActive(true);
    mouseEnterCallback();
  };

  const mouseEnterLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseEnterLeave}
      {...(isActive && {
        className: "active",
      })}
    >
      {children}
    </div>
  );
};
