import RenderSortPage from './components/SortingPage/index.jsx'
import RenderAlgoInfoPage from './components/SortingAlgoPage/index.jsx'
import {GlobalStyle} from './styleGlobal/global'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RenderFooter from './components/Footer/index.jsx'
import RenderNav from './components/Nav/index.jsx'
import RenderHomePage from './components/Home/index.jsx';
import RenderPathPage from './components/PathPage/index.jsx';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <RenderNav/>
        <Routes>
          <Route exact path="/" element={<RenderHomePage/>}/>
          {/* SORTING */}
          <Route exact path="/sorting" element={<RenderSortPage/>} />
          <Route exact path="/sorting/info" element={<RenderAlgoInfoPage/>} />

          {/* PATH */}
          <Route exact path="/path" element={<RenderPathPage/>} />
        </Routes>
        <RenderFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
