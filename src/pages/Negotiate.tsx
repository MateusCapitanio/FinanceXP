/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import myContext from "../contexts/myContext";
import IContext from "../interfaces/Context";
import "../styles/negotiateStyle.css";
import onlynumber from "../utils/onlyNumber";

function Negotiate() {
  const navigate = useNavigate();
  const context: any = useContext(myContext);
  const [sellDisable, setSellDisable] = useState(false);
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
  const [user, setUser]: [user: string, setUser: any] = useState("");

  useEffect(() => {
    const valueReturn: string | null = localStorage.getItem("user");
    setUser(valueReturn);

    const checkItem = arrayAcoesComp.find(
      (action: any) => action.name === name
    );

    if (qtd === 1 && checkItem === undefined) {
      setSellDisable(!sellDisable);
    }
  }, []);

  const redirectHome = () => {
    navigate("/home");
  };

  const calcQuantity = (qtdBuyConverted: number, qtdSellConverted: number) => {
    if (qtd === 1) {
      return qtdBuyConverted;
    }
    return qtdBuyConverted + qtd - qtdSellConverted;
  };

  const calcActions = (qtdBuy: number, qtdSell: number): number | any => {
    let qtdBuyConverted;
    let qtdSellConverted;

    if (Number.isNaN(qtdBuy)) {
      qtdBuyConverted = 0;
    } else {
      qtdBuyConverted = qtdBuy;
    }
    if (Number.isNaN(qtdSell)) {
      qtdSellConverted = 0;
    } else {
      qtdSellConverted = qtdSell;
    }

    const qtdActions = calcQuantity(qtdBuyConverted, qtdSellConverted);

    const saldoFinal =
      qtdSellConverted * value + saldo - qtdBuyConverted * value;

    const arrayCompFiltred = arrayAcoesComp.filter(
      (action: any) => action.name !== name
    );

    const arrayCompAtualizado = [
      ...arrayCompFiltred,
      { name, qtd: qtdActions, value },
    ];

    if (saldoFinal < 0) {
      return "Você não tem saldo suficiente para esta operação.";
    }

    if (qtdActions < 0) {
      return "Você não pode vender mais do que o máx de ações que possui.";
    }

    if (qtdActions === 0) {
      const arrayDispAtualizado = [...arrayAcoesDisp, { name, qtd: 1, value }];
      setArrayAcoesDisp(arrayDispAtualizado);

      if (arrayAcoesComp.length === 1) {
        setArrayAcoesComp([]);
        return saldoFinal;
      }

      const arrayCompAtualizado = arrayAcoesComp.filter(
        (action: any) => action.name !== name
      );
      setArrayAcoesComp(arrayCompAtualizado);
      return saldoFinal;
    }

    setItemNegotiate([{ name, qtd: qtdActions, value }]);
    setArrayAcoesComp(arrayCompAtualizado);
    return saldoFinal;
  };

  const checkActions = () => {
    const inputBuy: any = document.querySelector("#buyInput");
    const inputSell: any = document.querySelector("#sellInput");

    const arrayAtualizado = arrayAcoesDisp.filter(
      (action: any) => action.name !== name
    );

    setArrayAcoesDisp(arrayAtualizado);

    if (inputBuy.value === "" && inputSell.value === "") {
      return alert("É necessário informar pelo menos um valor.");
    }

    const resultCalc = calcActions(
      parseFloat(inputBuy.value),
      parseFloat(inputSell.value)
    );
    if (typeof resultCalc === "string") return alert(resultCalc);
    setSaldo(resultCalc);
    return navigate("/home");
  };

  return (
    <main className="mainNegotiate">
      <div className="divUser">
        <span className="user">{`Usuário: ${user}`}</span>
      </div>
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
