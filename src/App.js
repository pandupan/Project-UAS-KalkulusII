import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/home/home.jsx' ;
import Dashboard from "./pages/dashboard/dashboard.jsx";
import LayoutLanding from "./pages/widget/layoutLanding.js";


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
      < Dashboard />
    }
    />
      
  </Routes>
  
  </BrowserRouter>
  </>
  );
}

export default App;
