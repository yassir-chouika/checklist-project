import React from "react";
import { useParams } from "react-router-dom";
import TaskCard from "../component/TaskCard";

const TaskList =({ checklists }) => {
  const { id } = useParams();
  const checklist = checklists.find((item) => item.id === parseInt(id));

  if (!checklist) return <p>Checklist not found!</p>;

  return (
    <div>
      <h2>{checklist.title}</h2>
      <p>{checklist.description}</p>
      <div>
        {checklist.tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          checklist.tasks.map((task) => (
            <TaskCard key={task.id} description={task.title} />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
