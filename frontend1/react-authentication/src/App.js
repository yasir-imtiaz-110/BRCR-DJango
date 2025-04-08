// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import ViewUser from './components/ViewUser';
import EditUsers from './components/EditUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AddUser/>
      <BrowserRouter>
        <Routes>
          <Route path="/users/add" element={< AddUser />}/>
          <Route path="/users/list" element={< UsersList />}/>
          <Route path="/users/view" element={< ViewUser />}/>
          <Route path="/users/update" element={< EditUsers />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
