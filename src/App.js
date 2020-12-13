import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Post from './pages/Post';
import DarkMode from 'darkmode-js';

function App() {
  const darkOptions = {
    // time: '1s',
    mixColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    label: '🌓',
    autoMatchOsTheme: true
  };

  const darkMode = new DarkMode(darkOptions);
  darkMode.showWidget();

  return (
    <>
      <NavBar />

      <Switch>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
