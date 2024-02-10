import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Loading = ({ ...rest }: Props) => {
  return <div {...rest}>Loading</div>;
};
