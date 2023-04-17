import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter> 
   
   <Routes>
    
    <Route path='' element={<Table/>}></Route>
   


   </Routes>
   </BrowserRouter>
  );
}

export default App;
