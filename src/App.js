import logo from './logo.svg';
import './App.css';
import './layouts/css/style.css';
import Navbar from './layouts/navbar';
import Sidebar from './layouts/Sidebar';
import Posts from './layouts/Posts';

function App() {
  return (
    <div className="App">
      <Navbar prandName="Tarmeez Academy" />
      <div className="containar">
          <Posts/>
          <Sidebar/>
      </div>
    </div>
  );
}

export default App;
