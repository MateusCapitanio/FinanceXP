import React, { useMemo, useState } from "react";

import { IChildren } from "../interfaces/Children";
import myContext from "./myContext";

function Provider({ children }: IChildren) {
  const [arrayAcoesDisp, setArrayAcoesDisp] = useState([]);
  const [arrayAcoesComp, setArrayAcoesComp] = useState([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: any = {
    arrayAcoesDisp,
    setArrayAcoesDisp,
    arrayAcoesComp,
    setArrayAcoesComp,
  };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

export default Provider;
