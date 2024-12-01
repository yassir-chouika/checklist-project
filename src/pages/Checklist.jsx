import TaskCard from "../component/TaskCard";
import uniqid from 'uniqid';

function Checklist() {
  
  const tasks = [
    {
      id : uniqid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      id : uniqid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      id : uniqid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
    {
      id : uniqid(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit dolor eligendi! ",
    },
  ];
  return (
    <div>
      <h1>Checklist</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} description={task.description} />
      ))}
    </div>
  );
}

export default Checklist;
