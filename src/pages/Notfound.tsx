import "../styles/notFoundStyle.css";
import notFound from "../assets/notFound.png";

function Notfound() {
  return (
    <div>
      <main className="mainNotFound">
        <div className="divText">
          <img className="notFoundImage" alt="notFoundImage" src={notFound} />
          {/* <h1 className="ops">OOPS...</h1>
          <h1 className="text">NÃO HÁ NADA POR AQUI!</h1> */}
        </div>
      </main>
    </div>
  );
}

export default Notfound;
