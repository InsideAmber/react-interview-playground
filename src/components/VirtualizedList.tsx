// src/components/VirtualizedList.tsx
import { List, type RowComponentProps } from 'react-window';

type Item = {
  id: number;
  name: string;
};

const data: Item[] = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  name: `Item ${index + 1}`,
}));

// Row component using RowComponentProps with an empty object
const Row = ({ index, style }: RowComponentProps<object>) => {
  const item = data[index]; // access data from outer scope
  return (
    <div style={style} className="border-b p-2">
      {item.name}
    </div>
  );
};

const VirtualizedList = () => {
  return (
    <div className="h-[600px] border border-gray-300">
      <List
        rowComponent={Row}
        rowCount={data.length}
        rowHeight={35}
        rowProps={{}} // pass an empty object since it's required
        defaultHeight={600}
      />
    </div>
  );
};

export default VirtualizedList;
