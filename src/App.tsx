import { BrowserRouter, Route, Routes } from "react-router-dom";

import Provider from "./contexts/Provider";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
