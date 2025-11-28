import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import countryFlag from "../../assets/Vector.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = playerData.price;

    if (availableBalance < playerPrice) {
      toast("Insufficient balance to select this player.");
      return;
    }
    if (purchasedPlayers.length === 6) {
      toast("You can select a maximum of 6 players.");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);

    toast(`${playerData.player_name} has been selected!`);
  };
  return (
    <div className="card bg-base-100 shadow-sm p-4 md:grid-cols-3">
      <figure>
        <img
          src={player.player_image}
          alt={player.player_name}
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </figure>
      <div className="mt-4">
        <div className="flex items-center">
          <img src={userImg} alt="" className="w-[20px] h-[20px]" />{" "}
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b-1 border-gray-200 pb-4">
          <div className="flex gap-2 items-center">
            <img className="w-[15px] h-[15px]" src={countryFlag} alt="" />
            <span className="text-gray-500">{player.player_country}</span>
          </div>

          <button className="btn text-gray-500">{player.playing_role}</button>
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-4 justify-between items-center">
          <span className="font-bold">Price: {player.price}</span>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn text-gray-500 h-[px]"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
