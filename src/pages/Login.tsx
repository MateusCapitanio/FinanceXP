import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import myContext from "../contexts/myContext";
import IContext from "../interfaces/Context";

// CSS
import "../styles/loginStyle.css";
import { arrayAcoes } from "../utils/acoes";

function Login() {
  const navigate = useNavigate();

  const [validateEmail, setValidadeEmail] = useState(false);
  const [validateSenha, setValidadeSenha] = useState(false);
  const [email, setEmail] = useState("");
  const [userLoged, setUserLoged] = useState("");
  const context: any = useContext(myContext);
  const { setArrayAcoesDisp }: IContext = context;

  useEffect(() => {
    const valueReturn = localStorage.getItem("user");
    if (valueReturn !== null) {
      setUserLoged(valueReturn);
    }
    setArrayAcoesDisp(arrayAcoes);
  }, []);

  const checkInput = (event?: any): void => {
    const emailRegex = /^\w+@[a-z]+(\.[a-z]+){1,2}$/;
    const { target } = event;

    if (target.id === "email") {
      const validate = emailRegex.test(target.value);
      setValidadeEmail(validate);
      setEmail(target.value);
    }
    if (target.id === "senha") {
      const validate = target.value.length >= 8;
      setValidadeSenha(validate);
    }
  };

  const btnSubmit = (e: any) => {
    e.preventDefault();

    const emailString = JSON.stringify(email);
    localStorage.setItem("user", emailString);

    const loginDate = JSON.stringify(new Date());
    localStorage.setItem("horario", loginDate);
    navigate("/home");
  };

  return (
    <div>
      <span className="userLoged">
        <p>Último login: {userLoged}</p>
      </span>
      <main className="main">
        <section className="loginSection">
          <h1>Login</h1>
          <form>
            <input
              id="email"
              required
              onChange={checkInput}
              placeholder="Email..."
              type="email"
            />
            <input
              id="senha"
              required
              onChange={checkInput}
              placeholder="Senha de mínimo 8 caracteres"
              type="password"
            />
            <button
              id="buttonSubmit"
              onClick={btnSubmit}
              type="submit"
              disabled={!(validateEmail && validateSenha)}
            >
              Entrar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
