import React from "react";

type Item = {
    title: string;
    id: number;
    checked: boolean;
}

const data: Item[] = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];


const TransferList = () => {
  const [leftBox, setLeftBox] = React.useState<Item[]>(data);
  const [rightBox, setRightBox] = React.useState<Item[]>([]);

  console.log(leftBox);

  const checkButtonForLeft = (id:number) => {
    const checkedButton = leftBox.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // console.log(checkedButton);
    setLeftBox(checkedButton);
  };
  const checkButtonForRight = (id:number) => {
    const checkedButton = rightBox.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // console.log(checkedButton);
    setRightBox(checkedButton);
  };

  const moveNext = () => {
    const selectedItems = leftBox.filter((item) => item.checked);
    if (selectedItems.length > 0) {
      setLeftBox((prevItems) => prevItems.filter((item) => !item.checked));

      setRightBox((prevItems) => [
        ...prevItems,
        ...selectedItems.map((item) => ({ ...item, checked: false })),
      ]);
    }
  };

  const movePrev = () => {
    const selectedItems = rightBox.filter((item) => item.checked);
    if (selectedItems.length > 0) {
      setRightBox((prevItems) => prevItems.filter((item) => !item.checked));

      setLeftBox((prevItems) => [
        ...prevItems,
        ...selectedItems.map((item) => ({ ...item, checked: false })),
      ]);
    }
  };

  return (
    <div className="flex justify-evenly items-center bg-slate-100 w-[700px] h-[500px] p-4">
      <div className="w-[200px] h-[400px] bg-white flex flex-col gap-2 justify-start items-center p-2">
        {leftBox.map((item) => (
          <button
            key={item.id}
            className={`${
              item.checked ? `bg-black text-[#fff]` : ``
            } text-[#000] p-2 w-[150px] border-solid border-2 border-black rounded-[10px]`}
            onClick={() => checkButtonForLeft(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={moveNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button onClick={movePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="w-[200px] h-[400px] bg-white flex flex-col gap-2 justify-start items-center p-2">
        {rightBox.map((item) => (
          <button
            key={item.id}
            className={`${
              item.checked ? `bg-black text-[#fff]` : ``
            } text-[#000] p-2 w-[150px] border-solid border-2 border-black rounded-[10px]`}
            onClick={() => checkButtonForRight(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TransferList;
