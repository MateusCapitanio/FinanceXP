/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-alert */
// subindo para o heroku
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import myContext from "../contexts/myContext";
import IContext from "../interfaces/Context";
import "../styles/transferStyle.css";
import onlynumber from "../utils/onlyNumber";

function Transfer() {
  const navigate = useNavigate();
  const [user, setUser]: [user: string, setUser: any] = useState("");
  const [valueOperation, setValueOperation] = useState(0);
  const [transferOption, setTransferOption] = useState("");

  const context: any = useContext(myContext);
  const { saldo, setSaldo }: IContext = context;

  useEffect(() => {
    const valueReturn: string | null = localStorage.getItem("user");
    setUser(valueReturn);
  }, []);

  const setOptionTransfer = ({ target }: any) => {
    const saque = "btnTransferSaque";
    const deposito = "btnTransferDepo";

    if (target.id === saque) {
      const btnNotSelected: any = document.querySelector(`#${deposito}`);
      btnNotSelected.style.background = "grey";

      const btnSelected: any = document.querySelector(`#${saque}`);
      btnSelected.style.background = "#79B2E9";
    }

    if (target.id === deposito) {
      const btnNotSelected: any = document.querySelector(`#${saque}`);
      btnNotSelected.style.background = "grey";

      const btnSelected: any = document.querySelector(`#${deposito}`);
      btnSelected.style.background = "#77dd77";
    }
    setTransferOption(target.id);
  };

  const redirectHome = () => {
    navigate("/home");
  };

  const captureValue = ({ target }: any) => {
    setValueOperation(parseFloat(target.value));
  };

  const executeOperation = () => {
    const inputValue: any = document.querySelector(".inputTransferValue");
    let saldoFinal;

    if (transferOption === "") {
      return alert("É necessário escolher uma operação.");
    }
    if (inputValue.value === "") {
      return alert("É necessário digitar algum valor.");
    }
    if (transferOption === "btnTransferDepo") {
      saldoFinal = saldo + valueOperation;
      setSaldo(saldoFinal);
    }

    if (transferOption === "btnTransferSaque") {
      saldoFinal = saldo - valueOperation;
      if (saldoFinal < 0) {
        return alert(`Você só pode sacar até R$${saldo},00`);
      }
      setSaldo(saldoFinal);
    }
    return navigate("/home");
  };

  return (
    <main>
      <div className="divUser">
        <span className="user">{`Usuário: ${user}`}</span>
      </div>
      <section className="painelStyle">
        <h1>Depósito/Retirada</h1>
        <p className="saldo">{`Saldo: R$${saldo},00`}</p>

        <div className="btnTransferSection">
          <button
            id="btnTransferDepo"
            onClick={setOptionTransfer}
            type="button"
          >
            Depositar
          </button>
          <button
            id="btnTransferSaque"
            onClick={setOptionTransfer}
            type="button"
          >
            Retirar
          </button>
        </div>
        <section className="inputConfirm">
          <input
            min={0}
            maxLength={5}
            placeholder="Digite um valor R$.."
            className="inputTransferValue"
            onChange={captureValue}
            onKeyPress={onlynumber}
            type="text"
          />
          <section className="btnConfirmBack">
            <button onClick={redirectHome} type="button">
              Voltar
            </button>
            <button onClick={executeOperation} type="button">
              Confirmar
            </button>
          </section>
        </section>
      </section>
    </main>
  );
}

export default Transfer;
