// import VirtualizedList from "./components/VirtualizedList"
// import Carousel from "./components/Carousel"
// import CheckboxSelect from "./components/CheckboxSelect"
import DependentDropdown from "./components/DependentDropdown"

const App = () => {
  return (
     <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mb-4">Multi select checkbox</h1>
      {/* <VirtualizedList /> */}
      {/* <Carousel /> */}
      {/* <CheckboxSelect /> */}
      <DependentDropdown />
    </div>
  )
}

export default App