import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./Pages/project/project";
import Default from "./Pages/default/default";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/project" element={<Project />} />
          <Route path="/*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
