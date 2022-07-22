import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/notFoundAnimation.json";

import "../styles/notFoundStyle.css";

function Notfound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <main className="mainNotFound">
        <Lottie options={defaultOptions} height={400} width={400} />
        <div className="divText">
          <h1 className="ops">OOPS...</h1>
          <h1 className="text">NÃO HÁ NADA POR AQUI!</h1>
        </div>
      </main>
    </div>
  );
}

export default Notfound;
