import { useState } from "react";

const TaskCard = ({ description }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full max-w-xs p-4 border-solid border-4 text-center transition-colors duration-500 ${
        isClicked ? "border-green-600" : "border-red-600"
      } bg-white rounded-2xl tablet:flex tablet:flex-row tablet:w-72 cursor-pointer transition-transform duration-300 hover:-translate-y-2 break-words overflow-wrap-anywhere`}
    >
      {description}
    </div>
  );
};

export default TaskCard;


