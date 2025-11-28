import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="flex justify-between items-center my-6 border-2 shadow-lg border-gray-100 p-4 rounded-md">
      <div className="flex items-center gap-4">
        <img
          src={player.player_image}
          className="h-[45px] w-[60px] rounded-xl"
          alt=""
        />
        <span>
          <h1 className="font-semibold">{player.player_name}</h1>
          <p className="text-gray-500 text-xs">{player.playing_role}</p>
        </span>
      </div>
      <div onClick={handleRemove}>
        <img src="https://i.ibb.co/p69qjqZq/Vector-1.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
