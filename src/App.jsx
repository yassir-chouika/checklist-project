import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DashBoard from "./pages/DashBoard";
import Checklist from "./pages/CheckList";
import Form from "./pages/Form";
import FormForge from "./component/FormForge";
import NavBar from "./component/NavBar";

function App() {
  const [checklists, setChecklists] = useState([]);
  // to add a new checklist
  const addChecklist = (newChecklist) => {
    setChecklists([...checklists, newChecklist]);
  };

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <Routes>
        {/* Pass checklists to Dashboard */}
        <Route path="/" element={<DashBoard checklists={checklists} />} />

        {/* Pass addChecklist to FormForge */}
        <Route
          path="/form"
          element={<FormForge addChecklist={addChecklist} />}
        />

        <Route path="/checklist" element={<Checklist />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
