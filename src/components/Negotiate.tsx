/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import myContext from "../contexts/myContext";

import "../styles/negotiateStyle.css";

function Negotiate() {
  const navigate = useNavigate();
  const context: any = useContext(myContext);
  const { itemNegotiate, saldo } = context;
  const { name, qtd, value } = itemNegotiate[0];

  const redirectHome = () => {
    navigate("/home");
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
                autoFocus
                placeholder="Digite um valor..."
                type="number"
              />
            </div>
            <div className="divInput2">
              <button className="sell" type="button">
                Vender
              </button>
              <input placeholder="Digite um valor..." type="number" />
            </div>
          </section>
        </div>
        <section className="btnConfirmBack">
          <button onClick={redirectHome} type="button">
            Voltar
          </button>
          <button type="button">Confirmar</button>
        </section>
      </section>
    </main>
  );
}

export default Negotiate;
