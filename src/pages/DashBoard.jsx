import React from "react";
import ChecklistCard from "../component/CheckListCard";
import { useNavigate } from "react-router-dom";

const DashBoard = ({ checklists, setChecklists }) => {
  const handleCardClick = (id) => {
    navigate(`/checklist/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this checklist?")) {
      setChecklists(checklists.filter((checklist) => checklist.id !== id));
    }
  };

  const handleModify = (checklist) => {
    navigate("/form", { state: checklist });
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("Form");
  };
  

  return (
    <main className="flex justify-center flex-col tablet:flex-row tablet:flex-wrap md:flex-row md:flex-wrap gap-4 p-5">
      {checklists.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg laptop:mx-40 laptop:my-16  w-full">
          <img src="../public/Checklist-icon.png" alt="" />
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            No Checklists Available
          </h3>
          <p className="text-gray-500 mb-4 text-center">
            Get started by creating your first checklist
          </p>
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-paletteYellow text-white rounded-lg hover:bg-amber-200 transition-colors font-bold"
          >
            Create Checklist
          </button>
        </div>
      ) : (
        checklists.map((checklist) => (
          <ChecklistCard
            key={checklist.id}
            title={checklist.title}
            description={checklist.description}
            completedTasks={
              checklist.tasks.filter((task) => task.completed).length
            }
            totalTasks={checklist.tasks.length}
            status={checklist.status || "not yet"}
            onDelete={() => handleDelete(checklist.id)}
            onModify={() => handleModify(checklist)}
            onClick={() => handleCardClick(checklist.id)}
          />
        ))
      )}
    </main>
  );
};

export default DashBoard;
