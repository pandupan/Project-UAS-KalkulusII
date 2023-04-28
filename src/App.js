import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/home.jsx' ;
import Dashboard from "./pages/dashboard/dashboard.jsx";
import LayoutLanding from "./pages/widget/layoutLanding.js";
import PersistentDrawerLeft from "./components/sidebar.jsx";
import BilanganKompleks from "./pages/content/bilangankompleks.jsx";
import BarisanDeret from "./pages/content/barisanderet.jsx"
import Matriks from "./pages/content/matriks.jsx"
import Vektor from "./pages/content/vektor.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element=
            {
              <LayoutLanding>
                < Home />
              </LayoutLanding>
            }
          />

          <Route path='/dashboard' element=
            { 
              <PersistentDrawerLeft>
                < Dashboard />
              </PersistentDrawerLeft>
            }
          />

          <Route path='/bilangankompleks' element=
            { 
              <PersistentDrawerLeft>
                <BilanganKompleks />
              </PersistentDrawerLeft>
            }
          />

          <Route path='/barisanderet' element=
            { 
              <PersistentDrawerLeft>
                <BarisanDeret />
              </PersistentDrawerLeft>
            }
          />

          <Route path='/matriks' element=
            { 
              <PersistentDrawerLeft>
                <Matriks />
              </PersistentDrawerLeft>
            }
          />

          <Route path='/vektor' element=
            { 
              <PersistentDrawerLeft>
                <Vektor />
              </PersistentDrawerLeft>
            }
          />
            
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
