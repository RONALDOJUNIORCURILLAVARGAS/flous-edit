import './App.css';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';

import Mpp from './components/servicios/mpp/mpp';
import BusinessIntelligence from './components/servicios/b-i/bi';
import DesarrolloS from './components/servicios/desarrollo-software/ds';
import Home from './components/inicio';
import UxUi from './components/servicios/ux-ui/ux-ui';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Nosostros from './components/nosotros/nosotros'
function App() {
  return (
    <>
      <HashRouter>

        {/* menu */}
        <Menu/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/power-platform" element={<Mpp />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/desarrollo-software" element={<DesarrolloS />} />
          <Route path="/ux-ui" element={<UxUi />} />
          <Route  path="/nosotros"  element={<Nosostros />} />
          <Route path="*" element={<p> Not found </p>} />
        </Routes>

        {/* footer */}
        <Footer/>
      </HashRouter>
    </>
  );
}

export default App;
