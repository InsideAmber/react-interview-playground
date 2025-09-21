// src/components/FilterDropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import { FiX } from "react-icons/fi";

type FilterOptions = {
  [key: string]: string[];
};

const FilterDropdown = () => {

  const filterOptions:FilterOptions = {
    Colors: ["Red", "Blue", "Green", "Black", "White"],
    Sizes: ["S", "M", "L", "XL"],
    Brands: ["Nike", "Adidas", "Puma", "Reebok"],
  };
  const [allFilterOptions, setAllFilterOptions] = useState(filterOptions);

  const emptyValueObject = Object.keys(filterOptions).reduce(
    (acc : any, key) => {
      acc[key] = "";
      return acc;
    },
    {}
  );

  const [search, setSearch] = useState(emptyValueObject);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])


  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    setSearch({ ...search, [category]: e.target.value });
    const checkCatgory = filterOptions[category];
    const updatedOptions = checkCatgory.filter((opt) =>
      opt.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllFilterOptions({ ...allFilterOptions, [category]: updatedOptions });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    if(checked){
        setSelectedOptions([...selectedOptions, value])
    }else{
        setSelectedOptions(selectedOptions.filter(opt => opt !== value))
    }
  }

  const clearCheckedCategory = (category: string) => {
    const categoryOptions = filterOptions[category];
    const filterCategoryOptions = selectedOptions.filter(opt => !categoryOptions.includes(opt))
   setSelectedOptions(filterCategoryOptions)
  }

  const clearOption=(index:number)=>{
    const updatedOptions = selectedOptions.filter((_, idx) => idx !== index);
    setSelectedOptions(updatedOptions);
  }

  console.log(selectedOptions);
  

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Dummy selected options for UI only

  return (
    <div className="w-full max-w-sm mx-auto relative" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        // onClick={() => setIsOpen(!isOpen)}
        className="flex flex-wrap items-center gap-2 w-full border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm"
      >
        {selectedOptions.length > 0 ? (
          <div className="flex flex-wrap gap-1">
            {selectedOptions.map((option, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full"
              >
                {option}
                <FiX onClick={()=>clearOption(idx)} className="cursor-pointer" />
              </span>
            ))}
          </div>
        ) : (
          <span className="text-gray-500">Select filters...</span>
        )}
        <FaChevronDown
          onClick={() => {setIsOpen(!isOpen); setSearch(emptyValueObject); setAllFilterOptions(filterOptions)}}
          className={`ml-auto text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute mt-2 w-full border rounded-lg bg-white shadow-lg p-4 max-h-72 overflow-y-auto z-10">
          {Object.entries(allFilterOptions).map(([category, options]) => (
            <div key={category} className="mb-5">
              {/* Category heading */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">
                  {category}
                </h3>
                <button onClick={()=>clearCheckedCategory(category)} className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1">
                  <FaTimes className="h-3 w-3" /> Clear
                </button>
              </div>

              {/* Search input */}
              <input
                value={search[category]}
                onChange={(e) => handleSearchChange(e, category)}
                type="text"
                placeholder={`Search ${category}...`}
                className="w-full mb-2 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              {/* Options */}
              <div className="flex flex-col gap-2">
                {options.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={opt}
                      checked={selectedOptions.includes(opt)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
