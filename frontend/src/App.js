import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEmployeePage from "./pages/CreateEmployeePage";
import UpdateEmployee from "./components/UpdateEmployee";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addemployee" element={<CreateEmployeePage />} />
        <Route path="/update/:id" element={<UpdateEmployee/>} />
      </Routes>
    </div>
  );
}

export default App;
