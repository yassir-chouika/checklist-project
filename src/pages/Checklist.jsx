import React from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../component/TaskCard";

const Checklist = ({ checklists }) => {
  const { id } = useParams();

  // Find the checklist by ID
  const checklist = checklists.find((item) => item.id === id);

  if (!checklist) return <p>Checklist not found!</p>;

  return (
    <div>
      <h2>{checklist.title}</h2>
      <p>{checklist.description}</p>
      <div>
        {checklist.tasks && checklist.tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          checklist.tasks.map((task) => (
            <TaskCard key={task.id} description={task.content} />
          ))
        )}
      </div>
    </div>
  );
};

export default Checklist;
