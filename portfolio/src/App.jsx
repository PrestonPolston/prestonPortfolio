import NavBar from "./components/NavBar";
import HomePageA from "./components/HomePageA";
import HomePageB from "./components/HomePageB";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div id="pageContainer">
        <div id="flexContainer">
          <HomePageA />
          {/* <div className="scrollableContent"> */}
          <HomePageB />
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
