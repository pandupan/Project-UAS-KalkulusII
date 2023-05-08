import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/home.jsx' ;
import Dashboard from "./pages/dashboard/dashboard.jsx";
import LayoutLanding from "./pages/widget/layoutLanding.js";
import Sidebar from "./components/sidebar.jsx";
import Materi from './pages/content/Materi/materi.jsx'
import Riwayat from './pages/Riwayat/riwayat.jsx'
import Determinanordo2 from './pages/content/matriks 2 x 2/determinanordo2.jsx'
import Determinanordo3 from './pages/content/matriks 3 x 3/determinanordo3.jsx'
import Minorordo2 from './pages/content/matriks 2 x 2/minorordo2.jsx'
import Minorordo3 from './pages/content/matriks 3 x 3/minorordo3.jsx'
import Kofaktor2 from './pages/content/matriks 2 x 2/kofaktorordo2.jsx'
import Kofaktor3 from './pages/content/matriks 3 x 3/kofaktorordo3.jsx'
import Adjoinordo2 from './pages/content/matriks 2 x 2/adjoinordo2.jsx'
import Adjoinordo3 from './pages/content/matriks 3 x 3/adjoinordo3.jsx'




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
              <Sidebar>
                < Dashboard />
              </Sidebar>
            }
          />

          <Route path='/materi' element=
            { 
              <Sidebar>
                <Materi />
              </Sidebar>
            }
          />

          <Route path='/determinan2' element=
            { 
              <Sidebar>
                <Determinanordo2 />
              </Sidebar>
            }
          />

          <Route path='/determinan3' element=
            { 
              <Sidebar>
                <Determinanordo3 />
              </Sidebar>
            }
          />

          <Route path='/minor2' element=
            { 
              <Sidebar>
                <Minorordo2 />
              </Sidebar>
            }
          />

          <Route path='/minor3' element=
            { 
              <Sidebar>
                <Minorordo3 />
              </Sidebar>
            }
          />

          <Route path='/kofaktor2' element=
            { 
              <Sidebar>
                <Kofaktor2 />
              </Sidebar>
            }
          />

          <Route path='/kofaktor3' element=
            { 
              <Sidebar>
                <Kofaktor3 />
              </Sidebar>
            }
          />

          <Route path='/adjoin2' element=
            { 
              <Sidebar>
                <Adjoinordo2 />
              </Sidebar>
            }
          />

          <Route path='/adjoin3' element=
            { 
              <Sidebar>
                <Adjoinordo3 />
              </Sidebar>
            }
          />

          <Route path='/riwayat' element=
          {
            <Sidebar>
              <Riwayat/>
            </Sidebar>
          }
          />


            
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
