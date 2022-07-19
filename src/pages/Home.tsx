import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "../styles/homestyle.css";

function Home() {
  const navigate = useNavigate();

  const [user, setUser]: [user: string, setUser: any] = useState("");

  useEffect(() => {
    const valueReturn: string | null = localStorage.getItem("user");
    if (valueReturn !== null) {
      navigate("/home");
    }
    setUser(valueReturn);
  }, []);

  const logoutFunc = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <main>
        <header className="header">
          <div>
            <h2 className="user">{`Usuário: ${user}`}</h2>
            <button onClick={logoutFunc} className="logout" type="button">
              Sair
            </button>
          </div>
        </header>
        <section className="actionsStyle">
          <div>Minhas ações:</div>
          <div className="scrollMenu">
            <table>
              <tr className="descriptions">
                <th>Ação</th>
                <th>Quantidade</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td className="actionButtons">
                  <button type="button">Vender</button>
                  <button type="button">Comprar</button>
                </td>
              </tr>
            </table>
          </div>
        </section>

        <section className="actionsStyle">
          <div>Disponíveis para investir:</div>
          <div className="scrollMenu">
            <table>
              <tr className="descriptions">
                <th>Ação</th>
                <th>Quantidade</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td className="actionButtons">
                  <button type="button">Vender</button>
                  <button type="button">Comprar</button>
                </td>
              </tr>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
