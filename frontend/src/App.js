// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ViewUser from './components/ViewUser';
import EditUsers from './components/EditUsers';
import DeleteUser from './components/DeleteUser';
import AddVehicle from './components/AddVehicle';
import VehiclesList from './components/VehiclesList';
import EditVehicle from './components/EditVehicle';
import AddCustomer from './components/AddCustomer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomersList from './components/CustomersList';
import CustomersUpdate from './components/CustomersUpdate';

function App() {
  return (
    <div className="App">
      {/* <AddUser/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/users/add" element={< AddUser />}/>
          <Route path="/users/list" element={< UsersList />}/>
          <Route path="/users/view" element={< ViewUser />}/>
          <Route path="/users/update/:id" element={< EditUsers />}/> 
          <Route path="/users/delete/:id" element={< DeleteUser />}/>
          <Route path="/vehicles/add" element={< AddVehicle />}/>
          <Route path="/vehicles/list" element={< VehiclesList />}/>
          <Route path="/vehicles/update/:id" element={< EditVehicle />} />
          <Route path="/customers/add" element={< AddCustomer />}/>
          <Route path="/customers/list" element={< CustomersList />}/>
          <Route path="/customers/update/:id" element={< CustomersUpdate />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
