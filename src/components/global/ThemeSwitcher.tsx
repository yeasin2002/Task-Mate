import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const ThemeSwitcher = ({ ...rest }: Props) => {
  return <div {...rest}>ThemeSwitcher</div>;
};
