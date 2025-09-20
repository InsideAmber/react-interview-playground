import React from "react";

const allCheckboxes = [
  {
    id: 1,
    label: "Kingfisher",
    name: "kingfisher",
    checked: false,
  },
  {
    id: 2,
    label: "Heineken",
    name: "heineken",
    checked: false,
  },
  {
    id: 3,
    label: "Bira",
    name: "bira",
    checked: false,
  },
  {
    id: 4,
    label: "Budweiser",
    name: "budweiser",
    checked: false,
  },
  {
    id: 5,
    label: "Hoegaarden",
    name: "hoegaardenr",
    checked: false,
  },
  {
    id: 6,
    label: "Carlsberg",
    name: "carlsberg",
    checked: false,
  },
];

const CheckboxSelect = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [checkboxes, setCheckboxes] = React.useState(allCheckboxes);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const updatedCheckboxes = checkboxes.map((item) =>
      item.name === id ? { ...item, checked } : item
    );
    setCheckboxes(updatedCheckboxes);
  }

  const allChecked = ()=>{
    setIsChecked(!isChecked);
    const updatedCheckboxes = checkboxes.map((item)=>({ ...item, checked: !isChecked}))
    setCheckboxes(updatedCheckboxes);
  }

  console.log(checkboxes);
  return (
    <div className="flex flex-col bg-slate-100 w-[700px] h-[500px] p-4">
      <div className="flex gap-2">
        <label htmlFor="selectAll" className="text-[#000] flex gap-2">
          <input type="checkbox" id="selectAll"  className="cursor-pointer" checked={isChecked} onChange={allChecked}/>
          Select All
        </label>
      </div>
      <div className="mt-4 border-2 border-t-black" />
      <div className="mt-2 flex flex-col gap-2">
        {checkboxes.map((item) => (
          <label
            htmlFor={item.name}
            className="text-[#000] flex gap-2"
            key={item.id}
          >
            <input type="checkbox" id={item.name} className="cursor-pointer" checked={item.checked} onChange={handleChange}/>
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxSelect;
