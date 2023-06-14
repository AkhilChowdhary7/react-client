import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Cards from './Cards'
import UserForm from './UserForm'
import UsersTable from './UsersTable'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Cards/>}/>
        <Route path='/user-form' element={<UserForm/>}/>
        <Route path='/user-table' element={<UsersTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
