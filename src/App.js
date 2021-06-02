import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux"

// Pages
import LoginPage  from './pages/LoginPage'

// Components
import Navbar from './components/Navbar';

function App() {

  // Get Active User
  const activeUser = useSelector((state) => state.activeUser)
  console.log(activeUser)

  return (
    <BrowserRouter>
      {activeUser && <Navbar />}
      
      < Route path="/" exact>
        {!activeUser ?  <LoginPage /> : <h1>Logged in as {activeUser.name}</h1>}
      </ Route>
    </BrowserRouter>
  );
}

export default App;
