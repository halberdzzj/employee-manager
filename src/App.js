import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import NewEmployee from "./components/NewEmployee/NewEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";
import ErrorPage from "./components/pages/ErrorPage";
import EmployeePage from "./components/pages/EmployeePage";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/employee/list" />} />
      <Route exact path="/employee/list" element={<EmployeePage />} />
      <Route exact path="/employee/add" element={<NewEmployee />} />
      <Route exact path="/employee/edit/:id" element={<EditEmployee />} />
      <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
