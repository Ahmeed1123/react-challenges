import { createContext } from "react";

export let InputContext = createContext({
  title: "",
  handleChange: null,
  inputValue: null,
});
