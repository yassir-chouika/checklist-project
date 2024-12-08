import React from "react";

const ChecklistCard = ({
  title,
  description,
  completedTasks,
  totalTasks,
  status,
  onDelete,
  onModify,
  onClick,
}) => {
  // Function to determine status color
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "done":
        return "bg-green-100 text-green-800";
      case "in progress":
        return "bg-orange-100 text-orange-800";
      case "not yet":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-3 break-words overflow-wrap-anywhere">
      <div
        onClick={onClick}
        className="w-full p-4 bg-white rounded-2xl border border-gray-200 tablet:flex tablet:flex-row tablet:w-72 cursor-pointer"
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
          </div>

          <p className="text-gray-600 laptop:flex-wrap">{description}</p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500">
              {completedTasks} / {totalTasks} tasks completed
            </span>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onModify();
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[#666666] bg-white border border-gray-300 rounded-md hover:bg-[#e6e6e6] "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                Modify
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(); // Trigger the deletion only if confirmed
                }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-bold text-[white] bg-paletteRed rounded-md hover:bg-[#f86a6a] "
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChecklistCard;
