import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  Equipment,
  EquipmentAdd,
  EquipmentType,
  EquipmentView,
  EquipmentRequest,
} from "./pages/Equipment";
import { Employee, EmployeeAdd, EmployeeList } from "./pages/Employee";
import { Office, OfficeAdd, OfficeView } from "./pages/Office";
import { Users, UsersAdd, UsersView } from "./pages/Users";
import {
  Logs,
  LogsEquipments,
  LogsEmployee,
  LogsOffice,
  LogsUsers,
} from "./pages/Logs";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/equipment" exact element={<Equipment/>} />
        <Route path="/equipment/add" exact element={<EquipmentAdd/>} />
        <Route path="/equipment/type" exact element={<EquipmentType/>} />
        <Route path="/equipment/view" exact element={<EquipmentView/>} />
        <Route path="/equipment/request" exact element={<EquipmentRequest/>} />
        <Route path="/employee" exact element={<Employee/>} />
        <Route path="/employee/add" exact element={<EmployeeAdd/>} />
        <Route path="/employee/list" exact element={<EmployeeList/>} />
        <Route path="/office" exact element={<Office/>} />
        <Route path="/office/add" exact element={<OfficeAdd/>} />
        <Route path="/office/view" exact element={<OfficeView/>} />
        <Route path="/users" exact element={<Users/>} />
        <Route path="/users/add" exact element={<UsersAdd/>} />
        <Route path="/users/view" exact element={<UsersView/>} />
        <Route path="/logs" exact element={<Logs/>} />
        <Route path="/logs/equipments" exact element={<LogsEquipments/>} />
        <Route path="/logs/employee" exact element={<LogsEmployee/>} />
        <Route path="/logs/office" exact element={<LogsOffice/>} />
        <Route path="/logs/users" exact element={<LogsUsers/>} />/
      </Routes>
    </Router>
  );
}

export default App;
