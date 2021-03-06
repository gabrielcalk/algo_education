import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import RenderSortPage from "./page/Sort/index.jsx";
import RenderPathPage from "./page/Path/index.jsx";
import RenderSearchPage from "./page/Search/index.jsx";

import RenderAlgoInfoPage from "./page/SortInfo/index.jsx";
import RenderFooter from "./components/Footer/index.jsx";
import RenderNav from "./components/Nav/index.jsx";
import RenderHomePage from "./page/Home/index.jsx";

import { GlobalStyle } from "./styleGlobal/global";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
        <BrowserRouter>
          <RenderNav />
          <Routes>
            <Route exact path="/" element={<RenderHomePage />} />
            {/* SORTING */}
            <Route exact path="/sort" element={<RenderSortPage />} />
            <Route exact path="/sort/info" element={<RenderAlgoInfoPage />} />

            {/* PATH */}
            <Route exact path="/path" element={<RenderPathPage />} />

            {/* SEACH */}
            <Route exact path="/search" element={<RenderSearchPage />} />
          </Routes>
          <RenderFooter />
        </BrowserRouter>
      </DndProvider>
    </>
  );
}

export default App;
