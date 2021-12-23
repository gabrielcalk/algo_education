import RenderSortPage from './components/SortingPage/index.jsx'
import RenderAlgoInfoPage from './components/SortingAlgoPage/index.jsx'
import {GlobalStyle} from './styleGlobal/global'
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
      <Routes>
        <Route exact path="/sorting" element={<RenderSortPage/>} />
        <Route exact path="/sorting/algo" element={<RenderAlgoInfoPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
