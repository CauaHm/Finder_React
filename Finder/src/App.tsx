import { Header } from "./components/Header"; // Importe o Header aqui
import { MainTemplates } from "./Templates/MainTampletes";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <MainTemplates>
        <Home />
      </MainTemplates>
    </>
  )
}

export default App;