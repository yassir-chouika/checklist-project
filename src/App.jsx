import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashBoard from "./pages/DashBoard.jsx";
import CheckList from "./pages/CheckList.jsx";
import FormForge from "./component/FormForge.jsx";
import NavBar from "./component/NavBar.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  const [checklists, setChecklists] = useState([]);
  // add a new checklist
  const addChecklist = (newChecklist) => {
    setChecklists([...checklists, newChecklist]);
  };

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="min-h-screen flex flex-col">
        <header>
          <NavBar />
        </header>
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <DashBoard
                  checklists={checklists}
                  setChecklists={setChecklists}
                />
              }
            />
            <Route
              path="/form"
              element={
                <FormForge
                  addChecklist={addChecklist}
                  setChecklists={setChecklists}
                />
              }
            />
            <Route
              path="/checklist/:id"
              element={<CheckList checklists={checklists} />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
