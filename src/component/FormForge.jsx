import { useState } from "react";
import uniqid from "uniqid";

const FormForge = () => {

  // State for storing all content items
  const [items, setItems] = useState([]);
  // State for the new content input field
  const [newContent, setNewContent] = useState("");

  // Adds a new item to the items array if content isn't empty
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

  return (
    <div className="m-2 p-4 rounded-2xl bg-white ">
      <div className="flex flex-col justify-center gap-3 ">
        <label htmlFor="Title">
          <input
            id=""
            name="Title"
            type="text"
            placeholder="Title"
            className=" block flex-1 border-2 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm/6"
          />
        </label>

        <textarea
          className="w-full block flex-1 border-2 rounded-lg bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm/6"
          placeholder="Description"
          name="Description"
          id=""
        ></textarea>
      </div>
      {/* Input section for adding new items */}
      <div className=" w-full flex mt-4 justify-center gap-3">
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
      <div className="space-y-4">
        {items.map((item) => (
          <ContentItem
            key={item.id}
            item={item}
            onDelete={deleteItem}
            onModify={modifyItem}
          />
        ))}
      </div>
    </div>
  );
};

// Subcomponent for individual content items
const ContentItem = ({ item, onDelete, onModify }) => {
  // State to track if item is being edited
  const [isEditing, setIsEditing] = useState(false);
  // State to store the content while editing
  const [editContent, setEditContent] = useState(item.content);

  // Saves the edited content if it's not empty
  const handleSave = () =>
    (editContent.trim() && onModify(item.id, editContent)) ||
    setIsEditing(false);

  return (
    <div className="flex flex-col p-4 mt-4 border-y bg-white rounded-lg shadow hover:shadow-md transition-shadow ">
      {/* Content display: shows input field when editing, text when not */}
      {isEditing ? (
        <input
          type="text"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
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
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
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
