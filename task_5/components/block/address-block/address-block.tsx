import { FC } from "react";
import { HoverBlock, IHoverBlockProps } from "../block";

interface IAddress {
  country: string;
  street: string;
}

interface IProps extends IHoverBlockProps {
  address: IAddress;
}

export const AddressBlock: FC<IProps> = ({
  mouseEnterCallback,
  address: { country, street },
}) => {
  return (
    <HoverBlock mouseEnterCallback={mouseEnterCallback}>
      <address>
        country: {country}, street: {street}
      </address>
    </HoverBlock>
  );
};
