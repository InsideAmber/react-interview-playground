// src/components/Autocomplete.tsx
import React, { useState } from "react";

const staticOptions = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Orange",
  "Pineapple",
  "Mango",
  "Strawberry",
  "Watermelon",
  "Blueberry",
];

export default function Autocomplete() {
  const [isOpen, setIsOpen] = useState(false); // UI demo: dropdown always open
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(staticOptions);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // In a real app, you might filter options based on searchTerm here
    if (e.target.value) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    const updatedSearchValue = staticOptions.filter((opt) =>
      opt.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredOptions(updatedSearchValue);
  };

  return (
    <div className="relative w-72">
      {/* Search input */}
      <input
        value={searchTerm}
        onChange={handleSearchChange}
        type="text"
        placeholder="Search..."
        className="w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Suggestion list */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          <ul>
            {filteredOptions.map((item, idx) => (
              <li
                key={idx}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
