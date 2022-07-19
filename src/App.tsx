import { BrowserRouter, Route, Routes } from "react-router-dom";
import Negotiate from "./components/Negotiate";

import Provider from "./contexts/Provider";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/negotiate" element={<Negotiate />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
