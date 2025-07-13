import Header from "./components/Header/Header";
import PopExit from "./components/Popups/PopExit/PopExit";
import PopNewCard from "./components/Popups/PopNewCard/PopNewCard";
import PopBrowse from "./components/Popups/PopBrowse/PopBrowse";
import Main from "./components/Main/Main";
import "./App.css";
import React, { useEffect, useState } from 'react';

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

  return (
    <div className="wrapper">
      <PopExit />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main loading={loading} />
    </div>
  );
}

export default App;
