import { useState } from "react";

export const useToggle = (initialOpen: boolean) => {
  const [open, setOpen] = useState(initialOpen);

  const toggle = () => setOpen((prev) => !prev);

  const toggleOn = () => setOpen(true);

  const toggleOff = () => setOpen(false);

  const handle = (open: boolean) => setOpen(open);

  return { open, toggle, toggleOn, toggleOff, handle };
};
