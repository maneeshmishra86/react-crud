import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import {hasHistory} from 'react-router'

function App() {
  return (
    <div>
            <Router>
              <HeaderComponent/>
                <div className="container">
                  <Routes>
                   <Route path = "/" exact element = {<ListEmployeeComponent />}  ></Route>
                   <Route path = "/employees"  element = {<ListEmployeeComponent/>} ></Route>
                   <Route path= "/add-employee" exact element={<CreateEmployeeComponent/>} ></Route>
                  </Routes> 
                </div>
              <FooterComponent/>
              </Router>
        
    </div>
  );
}

export default App;
