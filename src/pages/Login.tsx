import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import { IChangeButton } from "../interfaces/ChangeButton";
// import myContext from '../contexts/myContext';

// CSS
import "../styles/loginStyle.css";

function Login() {
  const navigate = useNavigate();

  const [validateEmail, setValidadeEmail] = useState(false);
  const [validateSenha, setValidadeSenha] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const valueReturn = localStorage.getItem("user");
    // const user = JSON.parse(valueReturn);
    if (valueReturn !== null) {
      navigate("/home");
    }
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
    navigate("/home");
  };

  return (
    <div>
      <main>
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
              placeholder="Senha..."
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
