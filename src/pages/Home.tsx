import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "../styles/homestyle.css";
import myContext from "../contexts/myContext";
import IContext from "../interfaces/Context";

function Home() {
  const navigate = useNavigate();
  const context: any = useContext(myContext);
  const { arrayAcoesDisp, setItemNegotiate, arrayAcoesComp }: IContext =
    context;

  const [user, setUser]: [user: string, setUser: any] = useState("");

  useEffect(() => {
    const valueReturn: string | null = localStorage.getItem("user");
    if (valueReturn !== null) {
      navigate("/home");
    }
    setUser(valueReturn);
  }, []);

  const logoutFunc = () => {
    navigate("/");
  };

  const redirectNegotiate = ({ target }: any) => {
    const objFiltred = arrayAcoesDisp.filter(
      (action: any) => action.name === target.id
    );
    if (objFiltred.length === 0) {
      const objFiltred = arrayAcoesComp.filter(
        (action: any) => action.name === target.id
      );
      setItemNegotiate(objFiltred);
      return navigate("/negotiate");
    }
    setItemNegotiate(objFiltred);
    return navigate("/negotiate");
  };

  return (
    <div>
      <main>
        <header className="header">
          <div className="userLogout">
            <span className="user">{`Usuário: ${user}`}</span>
            <button onClick={logoutFunc} className="logout" type="button">
              Sair
            </button>
          </div>
        </header>
        <section className="actionsStyle">
          <div className="titleActions">Minhas ações:</div>
          <div className="scrollMenu">
            <table>
              <tr className="descriptions">
                <th>Ação</th>
                <th>Quantidade</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
              {arrayAcoesComp.map((action: any) => (
                <tr key={action.name}>
                  <td className="actionName">{action.name}</td>
                  <td>{action.qtd}</td>
                  <td>{`R$${action.value},00`}</td>
                  <td className="actionButtons">
                    <button
                      onClick={redirectNegotiate}
                      className="buy"
                      id={action.name}
                      type="button"
                    >
                      Comprar
                    </button>
                    <button
                      onClick={redirectNegotiate}
                      className="sell"
                      id={action.name}
                      type="button"
                    >
                      Vender
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>

        <section className="actionsStyle">
          <div className="titleActions">Disponíveis para investir:</div>
          <div className="scrollMenu">
            <table>
              <tr className="descriptions">
                <th>Ação</th>
                <th>Quantidade</th>
                <th>Valor (R$)</th>
                <th>Negociar</th>
              </tr>
              {arrayAcoesDisp.map((action: any) => (
                <tr key={action.name}>
                  <td className="actionName">{action.name}</td>
                  <td>{action.qtd}</td>
                  <td>{`R$${action.value},00`}</td>
                  <td className="actionButtons">
                    <button
                      onClick={redirectNegotiate}
                      className="buy"
                      id={action.name}
                      type="button"
                    >
                      Comprar
                    </button>
                    <button
                      onClick={redirectNegotiate}
                      disabled
                      className="sell"
                      id={action.name}
                      type="button"
                    >
                      Vender
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
