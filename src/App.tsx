import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Cards from './Cards'
import UserForm from './UserForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Cards/>}/>
        <Route path='/user-form' element={<UserForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
