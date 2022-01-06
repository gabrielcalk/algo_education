import RenderSortPage from './components/SortingPage/index.jsx'
import RenderAlgoInfoPage from './components/SortingAlgoPage/index.jsx'
import {GlobalStyle} from './styleGlobal/global'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import RenderFooter from './components/Footer/index.jsx'
import RenderNav from './components/Nav/index.jsx'
import RenderHomePage from './components/Home/index.jsx';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <RenderNav/>
        <Routes>
          <Route exact path="/" element={<RenderHomePage/>}/>
          <Route exact path="/sorting" element={<RenderSortPage/>} />
          <Route exact path="/sorting/info" element={<RenderAlgoInfoPage/>} />
        </Routes>
        <RenderFooter/>
      </BrowserRouter>
    </>
  );
}

export default App;
