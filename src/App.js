import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from "react-redux"

// Pages
import LoginPage  from './pages/LoginPage'
import QuestionPage from './pages/QuestionPage'

// Components
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AddQuestionPage from './pages/AddQuestionPage';
import NotFoundPage from './pages/NotFoundPage';
import Leaderboard from './pages/LeaderboardPage/Leaderboard';

function App() {

  // Get Active User
  const activeUser = useSelector((state) => state.activeUser)

  return (
    <BrowserRouter>
      {activeUser && <Navbar />}

      < Switch>
        {!activeUser &&
          < Route path="/" >
             <LoginPage />
          </ Route>
        }
        < Route path="/" exact>
          {!!activeUser  && <HomePage />}
        </ Route>

        < Route path="/add">
          < AddQuestionPage />
        </Route>

        < Route path="/leaderboard">
          < Leaderboard />
        </Route>

        < Route path="/questions/:question_id">
          < QuestionPage />
        </Route>

        <Route path="*">
            < NotFoundPage />
        </Route>
        
      </Switch>

    </BrowserRouter>
  );
}

export default App;
