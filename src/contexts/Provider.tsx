import React from "react";

import { IChildren } from "../interfaces/Children";
import myContext from "./myContext";

function Provider({ children }: IChildren) {
  const valueInicial = "First value";

  return (
    <myContext.Provider value={valueInicial}>{children}</myContext.Provider>
  );
}

export default Provider;
