import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import SidebarComponent from "./components/SidebarComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <SidebarComponent />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
