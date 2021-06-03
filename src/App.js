import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux"

// Pages
import LoginPage  from './pages/LoginPage'
import QuestionPage from './pages/QuestionPage'

// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddQuestionPage from './pages/AddQuestionPage';

function App() {

  // Get Active User
  const activeUser = useSelector((state) => state.activeUser)
  console.log(activeUser)

  return (
    <BrowserRouter>
      {activeUser && <Navbar />}

      < Route path="/" exact>
        {!activeUser ?  <LoginPage /> : <HomePage />}
      </ Route>

      < Route path="/questions/:question_id">
        < QuestionPage />
      </Route>

      < Route path="/add">
        < AddQuestionPage />
      </Route>

    </BrowserRouter>
  );
}

export default App;
