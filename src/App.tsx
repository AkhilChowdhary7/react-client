import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Cards from './Cards'
import UserForm from './UserForm'
import UsersTable from './UsersTable'
import GridCardForm from './GridCardForm'


const App = () => {

const URL : string ='http://localhost:8080/users'

  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Cards URL ={URL}/>}/>
        <Route path='/user-form' element={<UserForm URL ={URL} />}/>
        <Route path='/user-table' element={<UsersTable URL ={URL}/>}/>
        <Route path='/grid-card-form' element={<GridCardForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
