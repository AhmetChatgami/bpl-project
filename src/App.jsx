import { Suspense, useState } from "react";

import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Navbar from "./Components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto mt-10 flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>

        <div className="ml-2">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-6 ${
              toggle === true ? "bg-[#E7FE29] font-bold" : ""
            } border-1 border-gray-400 border-r-0 rounded-l-sm`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-3 border-1 border-gray-400 border-l-0 rounded-r-sm ${
              toggle === false ? "bg-[#E7FE29] font-bold" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <div className="loading loading-spinner">Loading players...</div>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
