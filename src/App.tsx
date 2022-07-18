import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
