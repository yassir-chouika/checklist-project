import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";

const FormForge = ({ addChecklist }) => {
  const [items, setItems] = useState([]); // State for storing all content items
  const [newContent, setNewContent] = useState(""); // State for the new content input field
  const [title, setTitle] = useState(""); // State for title
  const [description, setDescription] = useState(""); // State for description

  // Adds a new item to the items array
  const addItem = () =>
    (newContent.trim() &&
      setItems([...items, { id: uniqid(), content: newContent }])) ||
    setNewContent("");

  // Removes an item from items array by filtering out the matching id
  const deleteItem = (id) => setItems(items.filter((item) => item.id !== id));

  // Updates an item's content by mapping through items and updating the matching id
  const modifyItem = (id, newValue) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, content: newValue } : item
      )
    );
 
    const Navigate = useNavigate()
  const handleSave = () => {
    // Create a new checklist object
    const newChecklist = {
      title,
      description,
      tasks: items,
      id: uniqid(),
    };

    addChecklist(newChecklist);

    // Reseting the form
    setTitle("");
    setDescription("");
    setItems([]);
    alert("Checklist has been added successfully.");
    Navigate('/')
  };
    

  return (
    <div className="m-2 p-4 rounded-2xl bg-white laptop:mx-20 laptop:p-10 laptop:flex laptop:justify-center laptop:flex-col ">
      <div className="flex flex-col items-center gap-3 ">
        <label htmlFor="Title">
          <input
            value={title}
            name="Title"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} // Update state on input change
            className=" block flex-1 border-2 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
          />
        </label>

        <textarea
          value={description}
          name="Description"
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)} // Update state on input change
          className="w-full block flex-1 border-2 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm/6"
        ></textarea>
      </div>
      {/* Input section for adding new items */}
      <div className=" w-full flex mt-4 gap-3">
        <button
          onClick={addItem}
          className="max-w-48 bg-paletteYellow font-bold text-white px-4 py-2 rounded-md hover:bg-amber-200"
        >
          New task
        </button>
        <input
          type="text"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="flex-1 p-2 rounded-lg border-2"
          placeholder="Type something..."
        />
      </div>

      {/* Container for all content items */}
      <div className=" laptop:flex laptop:flex-row laptop:flex-wrap laptop:w-full laptop:gap-x-4 laptop:p-3 ">
        {items.map((item) => (
          <ContentItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onModify={modifyItem}
          />
        ))}
      </div>
      <div className="flex flex-col items-center ">
        <button
           onClick={handleSave}
          className="max-w-48 bg-paletteYellow font-bold text-white px-4 py-2 rounded-md hover:bg-amber-200 mt-5 ms-center "
        >
          Save
        </button>
      </div>
    </div>
  );
};

const ContentItem = ({ item, onDelete, onModify }) => {

  const [isEditing, setIsEditing] = useState(false); // State to track if item is being edited
  const [editContent, setEditContent] = useState(item.content); // State to store the content while editing

  const handleModify = () => {
    if (editContent.trim()) {
      onModify(item.id, editContent);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col p-4 mt-4 border-y bg-white rounded-lg shadow hover:shadow-md transition-shadow ">
      {/* shows input field when editing, text when not */}
      {isEditing ? (
        <input
          type="text"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          onBlur={handleModify}
          onKeyDown={(e) => e.key === "Enter" && handleModify()}
          className="flex-1 p-1 border rounded mr-4"
          autoFocus
        />
      ) : (
        <div className="w-full break-words overflow-wrap-anywhere">
          {item.content}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex justify-center gap-2 mt-3">
        <button
          onClick={() => (isEditing ? handleModify() : setIsEditing(true))}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {isEditing ? "Save" : "Modify"}
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FormForge;
