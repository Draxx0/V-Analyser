import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./router/router";
import { PlayerContextProvider } from "./contexts/PlayerContext";

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
