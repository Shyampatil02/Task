import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import Home from "./components/Home";


function App() {
  return (<div className="bg-neutral-300 h-auto w-screen">
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Registration/>} path='/register'/>
        <Route element={<Home/>} path='/dashbord/:ID'/>
        <Route element={<CreateEmployee/>} path='/:ID/create-employee'/>
        <Route element={<EmployeeList/>} path="/:ID/employee-list"/>
        <Route element={<EditEmployee/>} path="/:ID/edit-employee"/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
