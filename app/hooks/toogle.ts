import React from "react";

export const useToggle = () => {
  const [toggle, setToggle] = React.useState(false);

  const doToggle = React.useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return [toggle, doToggle] as const;
};
