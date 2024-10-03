import NavBar from "./components/NavBar";
import HomePageA from "./components/HomePageA";
import HomePageB from "./components/HomePageB";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="pageContainer">
        <HomePageA />
        <div className="scrollableContent">
          <HomePageB />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
