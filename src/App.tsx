import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./contexts/Provider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Negotiate from "./pages/Negotiate";
import Notfound from "./pages/Notfound";
import Transfer from "./pages/Transfer";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/negotiate" element={<Negotiate />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
