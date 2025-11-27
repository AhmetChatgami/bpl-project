import React, { use } from "react";
import userImg from "../../assets/user-1.png"
import countryFlag from "../../assets/Vector.png"

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto my-10 grid grid-cols-1n md:grid-cols-3 gap-6">

    {
        playerData.map(player=> <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img className="rounded-lg"
            src={player.player_image}
            alt={player.player_name} className="w-full h-[200px] object-cover"
          />
        </figure>
        <div className="mt-4">
         <div className="flex items-center">
            <img src={userImg} alt="" className="w-[20px] h-[20px]"/> <h2 className="card-title ml-2">{player.player_name}</h2>
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
            <button className="btn text-gray-500 h-[px]">Choose Player</button>
          </div>
        </div>
      </div>)
    }    
     
    </div>
  );
};

export default AvailablePlayers;
