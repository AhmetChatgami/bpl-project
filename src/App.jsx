import { Suspense, useState } from "react";

import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar/Navbar";


const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
}
function App() {
  const playersPromise = fetchPlayers();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<div>Loading players...</div>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
