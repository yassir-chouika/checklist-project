import React from "react";
import ChecklistCard from "../component/CheckListCard";


const DashBoard = ({ checklists }) => {
  const handleDelete = () => {
    alert(`Delete checklist button is working`);
  };

  const handleModify = () => {
    alert(`Modify checklist button is working`);
  };

  

  return (
    <main className="flex justify-center flex-col tablet:flex-row tablet:flex-wrap md:flex-row md:flex-wrap gap-4 p-5">
      {checklists.length === 0 ? (
        <p>No checklists yet</p>
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
            status={checklist.status || "In Progress"}
            onDelete={() => handleDelete(checklist.id)}
            onModify={() => handleModify(checklist.id)}
          />
        ))
      )}
    </main>
  );
};

export default DashBoard;
