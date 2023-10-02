import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Particulier } from "./components/Pages/Particulier";
import { Business } from "./components/Pages/Business";
import { Developer } from "./components/Pages/Developer";
import { DevenirClient } from "./components/Pages/DevenirClient";
import { DevenirAgent } from "./components/Pages/DevenirAgent";
import { Home } from "./components/Pages/Home";
import FormulaireClient from "./components/Pages/FormulaireClient";
import FormulaireAgent from "./components/Pages/FormulaireAgent";
import IsyWalletSteps from "./components/Pages/IsyWalletSteps";
import ComptePartenaire from "./components/Pages/ComptePartenaire";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Particulier" element={<Particulier />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Developer" element={<Developer />} />
            <Route path="/Devenir Client" element={<DevenirClient />} />
            <Route path="/Devenir Agent" element={<DevenirAgent />} />
            <Route path="/Formulaire-Client" element={<FormulaireClient />} />
            <Route path="/Formulaire-Agent" element={<FormulaireAgent />} />
            <Route path="/IsyWallet" element={<IsyWalletSteps />} />
            <Route path="/Compte-Partenaire" element={<ComptePartenaire />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
