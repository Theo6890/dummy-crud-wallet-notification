import './App.css';
import Home from "./components/TaskManager/TaskManager";
import ShowNotifications from "./components/Notifications/ShowNotifications";

function App() {

  return (
    <div className="app">
      <ShowNotifications />
      <Home />
    </div>
  );
}

export default App;
