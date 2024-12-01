import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Checklist from "./pages/Checklist";
import NavBar from "./component/NavBar";
import Form from "./pages/Form";
import ChecklistCard from "./component/CheckListCard";
import TaskCard from "./component/TaskCard";
import FormDraft from "./component/FormForge";

function App() {
  // request to api where you get all the tasks

  const tasks = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
  ];

  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      {/* <Checklist /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
