import NavBar from "./components/NavBar";
import HomePageA from "./components/HomePageA";
import HomePageB from "./components/HomePageB";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <HomePageA />
        <HomePageB />
      </div>
    </>
  );
}

export default App;
