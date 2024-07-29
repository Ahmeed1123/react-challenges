import logo from "./logo.svg";
import "./App.css";
import "./layouts/css/style.css";
import Navbar from "./layouts/navbar";
import Sidebar from "./layouts/Sidebar";
import Posts from "./layouts/Posts";

const showCategory = true;
function App() {
  return (
    <div className="App">
      <Navbar prandName="Tarmeez Academy test" />
      <div className="containar">
        <Posts />
        <AppSideMenu />
      </div>
    </div>
  );
}

function AppSideMenu() {
  if (showCategory) {
    return <Sidebar />;
  } else {
    return null;
  }
}

export default App;
