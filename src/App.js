import LoginPage  from './pages/LoginPage'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux"

function App() {

  // Get Active User
  const activeUser = useSelector((state) => state.activeUser)

  return (
    <BrowserRouter>
      < Route path="/" exact>
        {activeUser ? <h1>Logged IN</h1> : <LoginPage />}
      </ Route>
    </BrowserRouter>
  );
}

export default App;
