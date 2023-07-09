import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./router/router";
import { PlayerContextProvider } from "./contexts/PlayerContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayerContextProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </PlayerContextProvider>
    </QueryClientProvider>
  );
}

export default App;
