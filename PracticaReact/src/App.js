import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './common/Layout.js';
import LoginPage from './pags/LoginPage.js'
import Adverts from './pags/Adverts.js';
import IdAdverts from './pags/IdAdverts';
import NewAdverts from './pags/newAdverts.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' index element={<LoginPage/>} />
        <Route path='/adverts' element={<Layout/>}>
          <Route  index element={<Adverts/>}/> 
          <Route path=':advertsId' element={<IdAdverts/>} />
          <Route path='newAdverts' element={<NewAdverts/>} />
        </Route>
       
        <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/404" element={<div>404 | Not found</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      
    </div>
  );
}

export default App;
