import './App.css'
import { Heading } from './components/Heading';
import { Navbar } from './components/Navbar';
import { SelectionInputs } from './components/SelectionInputs';
import { GeneralSection } from './components/GeneralSection';
import { MaterialSection } from './components/MaterialSection';


function App() {
  return (
    <div className=" bg-blue-50 h-screen">
      <Heading title={"Goods Receipt Other - SGIL IT"} />
      
      <Navbar />

      <SelectionInputs /> 

      {/* General Section */}
      <GeneralSection />

      <MaterialSection />

    </div>
  );
}

export default App
