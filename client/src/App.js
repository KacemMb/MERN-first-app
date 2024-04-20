import { Route, Routes } from 'react-router-dom';
import './Style/App.css';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<LogIn/>} />
        <Route path='/Sign-up' element = {<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
