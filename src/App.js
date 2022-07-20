
import './App.css';
import './bootstrap.css'
import './index.css'
import './style.css'
import './responsive.css'
import Layout from './components/layout';
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Arneses from './components/Arneses';
import Audicion from './components/Audicion';
import Calzado from './components/Calzado';
import Senalamientos from './components/Senalamientos';
import Uniformes from './components/Uniformes';
import Materiales from './components/Materiales';
import Guantes from './components/Guantes';
import Bombero from './components/Bombero';
import Extinrores from './components/Extinrores';
import Herrajes from './components/Herrajes';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/arneses" element={ <Arneses />} />
          <Route exact path="/audicion" element={ <Audicion />} />
          <Route exact path="/calzado" element={ <Calzado />} />
          <Route exact path="/senalamientos" element={ <Senalamientos />} />
          <Route exact path="/uniformes" element={ <Uniformes />} />
          <Route exact path="/materiales" element={ <Materiales />} />
          <Route exact path="/guantes" element={ <Guantes />} />
          <Route exact path="/bomberos" element={ <Bombero />} />
          <Route exact path="/extintores" element={ <Extinrores />} />
          <Route exact path="/herrajes" element={ <Herrajes />} />
        </Routes>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
