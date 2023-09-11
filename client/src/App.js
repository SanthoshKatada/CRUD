import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Users from './Components/Users.jsx';
import Create from './Components/Create.jsx';
import Update from './Components/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
