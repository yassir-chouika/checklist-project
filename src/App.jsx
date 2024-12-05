import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashBoard from "./pages/DashBoard";
import Checklist from "./pages/CheckList";
import FormForge from "./component/FormForge";
import NavBar from "./component/NavBar";

function App() {
  const [checklists, setChecklists] = useState([]);
  // to add a new checklist
  const addChecklist = (newChecklist) => {
    setChecklists([...checklists, newChecklist]);
  };

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <header>
        <NavBar />
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <DashBoard checklists={checklists} setChecklists={setChecklists} />
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
          element={<Checklist checklists={checklists} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
