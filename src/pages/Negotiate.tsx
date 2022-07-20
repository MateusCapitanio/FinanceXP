/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import myContext from "../contexts/myContext";
import IContext from "../interfaces/Context";

import "../styles/negotiateStyle.css";

function Negotiate() {
  const navigate = useNavigate();
  const context: any = useContext(myContext);
  const [sellDisable, setSellDisable] = useState(false);
  const [qtdBuy, setQtdBuy] = useState(0);
  const {
    itemNegotiate,
    setItemNegotiate,
    saldo,
    arrayAcoesDisp,
    setArrayAcoesDisp,
    arrayAcoesComp,
    setArrayAcoesComp,
    setSaldo,
  }: IContext = context;
  const { name, qtd, value } = itemNegotiate[0];

  useEffect(() => {
    if (qtd === 1) {
      setSellDisable(!sellDisable);
    }
  }, []);

  const redirectHome = () => {
    navigate("/home");
  };

  const calcActions = (qtdBuy: number, qtdSell: number): number | any => {
    const saldoFinal = saldo - qtdBuy * value;
    return saldoFinal;
  };

  const checkActions = () => {
    // const result = arrayAcoesComp.find((action: any) => action.name === name);
    const inputBuy: any = document.querySelector("#buyInput");
    const inputSell: any = document.querySelector("#sellInput");

    if (inputBuy.value === "" || inputSell.value === "") {
      inputBuy.value = 0;
      inputSell.value = 0;
      // return alert("É necessário informar um valor.");
    }

    const arrayAtualizado = arrayAcoesDisp.filter(
      (action: any) => action.name !== name
    );

    setArrayAcoesDisp(arrayAtualizado);
    setItemNegotiate([{ name, qtd: parseFloat(inputBuy.value), value }]);

    const resultCalc = calcActions(
      parseFloat(inputBuy.value),
      parseFloat(inputSell.value)
    );
    if (resultCalc < 0)
      return alert("Você não tem saldo suficiente para esta operação.");
    setSaldo(resultCalc);
    setArrayAcoesComp([{ name, qtd: parseFloat(inputBuy.value), value }]);
    return navigate("/home");
  };

  const onlynumber = (evt: any) => {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    // var regex = /^[0-9.,]+$/;
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <main className="mainNegotiate">
      <section className="painelStyle">
        <h1>Comprar/Vender Ação:</h1>
        <p className="saldo">{`Saldo: R$${saldo},00`}</p>
        <div className="exibeAction">
          <table>
            <tr className="titles">
              <th>Ação</th>
              <th>Quantidade</th>
              <th>Valor (R$)</th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{qtd}</td>
              <td>{`R$${value},00`}</td>
            </tr>
          </table>

          <section className="btnSection">
            <div className="divInput1">
              <button className="buy" type="button">
                Comprar
              </button>
              <input
                min={0}
                maxLength={2}
                id="buyInput"
                autoFocus
                placeholder="Digite a quantidade..."
                onKeyPress={onlynumber}
                type="text"
              />
            </div>
            <div className="divInput2">
              <button disabled={sellDisable} className="sell" type="button">
                Vender
              </button>
              <input
                disabled={sellDisable}
                id="sellInput"
                maxLength={2}
                placeholder="Digite a quantidade..."
                onKeyPress={onlynumber}
                type="text"
              />
            </div>
          </section>
        </div>
        <section className="btnConfirmBack">
          <button onClick={redirectHome} type="button">
            Voltar
          </button>
          <button onClick={checkActions} type="button">
            Confirmar
          </button>
        </section>
      </section>
    </main>
  );
}

export default Negotiate;
