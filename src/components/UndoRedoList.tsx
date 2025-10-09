import React from "react";
import { FaUndo, FaRedo, FaPlus, FaTrash } from "react-icons/fa";

const UndoRedoList: React.FC = () => {
  // Static dummy list for UI
  const items = ["Learn React", "Build UI Components", "Prepare for Interviews"];

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4 border border-gray-200">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Undo / Redo List Manager
      </h2>

      {/* Input + Add button */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Add new item..."
          className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <FaPlus /> Add
        </button>
      </div>

      {/* List Section */}
      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-100 bg-gray-50">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
          >
            <span>{item}</span>
            <button className="text-red-500 hover:text-red-600 transition">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      {/* Undo / Redo Controls */}
      <div className="flex justify-center space-x-4 pt-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <FaUndo /> Undo
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <FaRedo /> Redo
        </button>
      </div>
    </div>
  );
};

export default UndoRedoList;
