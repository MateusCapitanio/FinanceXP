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
            <h2 className="user">{`Usuário: ${JSON.parse(user)}`}</h2>
            <button onClick={logoutFunc} className="logout" type="button">
              Sair
            </button>
          </div>
        </header>
      </main>
    </div>
  );
}

export default Home;
