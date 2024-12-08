import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TaskCard from "../component/TaskCard";

const Checklist = ({ checklists }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // Find the checklist by ID
  const checklist = checklists.find((item) => item.id === id);

  if (!checklist) return <p>Checklist not found!</p>;

  return (
    <>
      <div className="flex justify-end">
        <img
          onClick={handleGoBack}
          className="w-10 mr-8 cursor-pointer"
          src="../public/Back.svg"
          alt=""
        />
      </div>
      <div className="m-2 p-4 rounded-2xl bg-white laptop:mx-20 laptop:my-10">
        <h2 className="text-center font-bold text-lg">{checklist.title}</h2>
        <p className="text-center text-gray-500">{checklist.description}</p>
        <hr className="my-5 " />
        <div className="w-full p-3 flex flex-col items-center justify-center gap-4 tablet:flex-row laptop:flex-row tablet:flex-wrap">
          {checklist.tasks && checklist.tasks.length === 0 ? (
            <p>No tasks available.</p>
          ) : (
            checklist.tasks.map((task) => (
              <TaskCard key={task.id} description={task.content} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Checklist;
