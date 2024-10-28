import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/auth";
import { Cadastro } from "./pages/cadastro";
import { Feed } from "./pages/feed";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Router>
        <AuthContextProvider>
          <GlobalStyle />
          <Routes>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="feed" element={<Feed />} />
              <Route path="cadastro" element={<Cadastro />} />
          </Routes >
        </AuthContextProvider>
      </Router>
  );
}

export default App;
