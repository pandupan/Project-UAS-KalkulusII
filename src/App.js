import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../src/pages/home/home"
import Dashboard from "./pages/dashboard/dashboard.jsx";
import LayoutLanding from "./pages/widget/layoutLanding.js";
import Sidebar from "./components/sidebar.jsx";
import Riwayat from './pages/Riwayat/riwayat.jsx'
import Determinanordo2 from './pages/content/matriks 2 x 2/determinanordo2.jsx'
import Determinanordo3 from './pages/content/matriks 3 x 3/determinanordo3.jsx'
import Minorordo2 from './pages/content/matriks 2 x 2/minorordo2.jsx'
import Minorordo3 from './pages/content/matriks 3 x 3/minorordo3.jsx'
import Kofaktor2 from './pages/content/matriks 2 x 2/kofaktorordo2.jsx'
import Kofaktor3 from './pages/content/matriks 3 x 3/kofaktorordo3.jsx'
import Adjoinordo2 from './pages/content/matriks 2 x 2/adjoinordo2.jsx'
import Adjoinordo3 from './pages/content/matriks 3 x 3/adjoinordo3.jsx'
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  

          <Route path='/' element=
            {
              <LayoutLanding> 
                <Home />
              </LayoutLanding>
            }
          />

          <Route path='/dashboard' element=
            { 
              <Sidebar>
                < Dashboard />
              </Sidebar>
            }
          />

          <Route path='/determinan2' element=
            { 
              <Sidebar>
                <Determinanordo2 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/determinan3' element=
            { 
              <Sidebar>
                <Determinanordo3 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/minor2' element=
            { 
              <Sidebar>
                <Minorordo2 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/minor3' element=
            { 
              <Sidebar>
                <Minorordo3 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/kofaktor2' element=
            { 
              <Sidebar>
                <Kofaktor2 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/kofaktor3' element=
            { 
              <Sidebar>
                <Kofaktor3 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/adjoin2' element=
            { 
              <Sidebar>
                <Adjoinordo2 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/adjoin3' element=
            { 
              <Sidebar>
                <Adjoinordo3 />
                <Footer />
              </Sidebar>
            }
          />

          <Route path='/riwayat' element=
          {
            <Sidebar>
              <Riwayat/>
              <Footer />
            </Sidebar>
          }
          />
            
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
