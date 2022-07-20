import { BrowserRouter, Route, Routes } from "react-router-dom";
import Negotiate from "./pages/Negotiate";

import Provider from "./contexts/Provider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/negotiate" element={<Negotiate />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
