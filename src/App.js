import { Provider } from 'react-redux';
import { store } from './store/store'
import LoginPage  from './pages/LoginPage'
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        < Route path="/">
          <LoginPage />
        </ Route>
      </BrowserRouter>

    </Provider>

  );
}

export default App;
