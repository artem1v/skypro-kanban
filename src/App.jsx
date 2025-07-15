import Header from "./components/Header/Header";
import PopExit from "./components/Popups/PopExit/PopExit";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Main from "./components/Main/Main";
import "./App.css";


function App() {
  


  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
