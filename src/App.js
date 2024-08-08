import logo from "./logo.svg";
import "./App.css";
import MyForm from "./site/js/MyForm";
import { userContext } from "./site/context/UserContext";
import Material from "./site/js/components/Matrial/Matrial";
function App() {
  return (
    <userContext.Provider
      value={{ userName: "test", email: "admin@admin.com", name: "ahmed" }}
    >
      <div className="App">
        {/* <MyForm /> */}
        <Material />
      </div>

    </userContext.Provider>
  );
}

export default App;
