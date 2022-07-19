import React from "react";

import "../styles/negotiateStyle.css";

function Negotiate() {
  const exibePopup = () => {
    const popup: any = document.querySelector(".popup-wrapper");
    popup.style.display = "block";
    popup.style.transition = "0.5s";
  };

  const EscondePopup = () => {
    const popup: any = document.querySelector(".popup-wrapper");
    popup.style.display = "none";
    popup.style.transition = "0.5s";
  };

  return (
    <main>
      <div className="popup-wrapper">
        <div className="popup">
          <div className="popup-content">
            <h1>Comprar/Vender Ação</h1>
            <button type="button">Comprar</button>
            <button type="button">Vender</button>
            <div>
              <button onClick={EscondePopup} type="button">
                Voltar
              </button>
              <button type="button">Cofirmar</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={exibePopup} type="button">
        Exibir
      </button>
    </main>
  );
}

export default Negotiate;
