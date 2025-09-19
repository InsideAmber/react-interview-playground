import React from "react";

const allCheckboxes = [
  {
    id: 1,
    label: "Kingfisher",
    name: "kingfisher",
  },
  {
    id: 2,
    label: "Heineken",
    name: "heineken",
  },
  {
    id: 3,
    label: "Bira",
    name: "bira",
  },
  {
    id: 4,
    label: "Budweiser",
    name: "budweiser",
  },
  {
    id: 5,
    label: "Hoegaarden",
    name: "hoegaardenr",
  },
  {
    id: 6,
    label: "Carlsberg",
    name: "carlsberg",
  },
];

const CheckboxSelect = () => {
  return (
    <div className="flex flex-col bg-slate-100 w-[700px] h-[500px] p-4">
      <div className="flex gap-2">
        <label htmlFor="selectAll" className="text-[#000] flex gap-2">
          <input type="checkbox" id="selectAll"  className="cursor-pointer"/>
          Select All
        </label>
      </div>
      <div className="mt-4 border-2 border-t-black" />
      <div className="mt-2 flex flex-col gap-2">
        {allCheckboxes.map((item) => (
          <label
            htmlFor={item.name}
            className="text-[#000] flex gap-2"
            key={item.id}
          >
            <input type="checkbox" id={item.name} className="cursor-pointer"/>
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxSelect;
