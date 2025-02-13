import React from "react";

import disneyI from "./../assets/Images/disney.png";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelI from "./../assets/Images/marvel.png";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGI from "./../assets/Images/nationalG.png";
import nationalGV from "./../assets/Videos/national-geographic.mp4";
import pixarI from "./../assets/Images/pixar.png";
import pixarV from "./../assets/Videos/pixar.mp4";
import starwarI from "./../assets/Images/starwar.png";
import starwarV from "./../assets/Videos/star-wars.mp4";

function ProductionHouse() {
  const productionHouse = [
    { id: 1, image: disneyI, video: disneyV },
    { id: 2, image: marvelI, video: marvelV },
    { id: 3, image: nationalGI, video: nationalGV },
    { id: 4, image: pixarI, video: pixarV },
    { id: 5, image: starwarI, video: starwarV },
  ];

  return (
    <>
      <div className="md:flex gap-2 px-4 ml-18 mr-12 my-4">
        {productionHouse.map((item, index) => (
          <div key={item.id}
            className="rounded-2xl bg-[#23242e] border-2 border-gray-600 w-fit h-fit m-4 
            hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer
            relative shadow-xl"
          >
            <img
              src={item.image}
              alt="production house"
              className="w-full z-[1]"
            />
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductionHouse;
