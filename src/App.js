import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Hello Krishna Let's build the slack clone</h1>
      {/*Header*/}
      <Header />
      <div className="app_body">
        {/*Side bar*/}
        <Sidebar />
        {/*React-Router -> Chat Screen */}
      </div>

    </div>
  );
}

export default App;
