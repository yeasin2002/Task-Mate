import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Nav = ({ ...rest }: Props) => {
  return <div {...rest}>Nav</div>;
};
