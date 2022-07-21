import { useState } from "react";

import myContext from "./myContext";

function Provider({ children }: any) {
  const [arrayAcoesDisp, setArrayAcoesDisp] = useState([]);
  const [arrayAcoesComp, setArrayAcoesComp] = useState([]);
  const [itemNegotiate, setItemNegotiate] = useState([]);
  const [saldo, setSaldo] = useState(5000);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value: object = {
    arrayAcoesDisp,
    setArrayAcoesDisp,
    arrayAcoesComp,
    setArrayAcoesComp,
    itemNegotiate,
    setItemNegotiate,
    saldo,
    setSaldo,
  };

  return <myContext.Provider value={value}>{children}</myContext.Provider>;
}

export default Provider;
