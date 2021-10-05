import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/*Header*/}
            < Header />
            <div className="app_body">
              {/*Side bar*/}
              <Sidebar />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>

              {/*React-Router -> Chat Screen */}
            </div>
          </>
        )}

      </Router>

    </div>
  );
}

export default App;
