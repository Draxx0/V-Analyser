import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./router/router";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import { useEffect } from "react";
import ApiService from "./services/api.service";

function App() {
  return (
    <PlayerContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </PlayerContextProvider>
  );
}

export default App;
