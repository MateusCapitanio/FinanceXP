import React, { useContext } from "react";
// import myContext from '../contexts/myContext';

// CSS
import "../styles/loginStyle.css";

function Login() {
  // const context = useContext(myContext)

  return (
    <div>
      <main>
        <section className="loginSection">
          <h1>Login</h1>
          <form>
            <input placeholder="Email..." type="email" />
            <input placeholder="Senha..." type="password" />
            <button type="submit">Entrar</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
