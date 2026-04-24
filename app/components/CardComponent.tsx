import Link from 'next/link';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";


type Pokemon = {
  id: number;
  name: string;
  type: string;
  image: string;
}


export const CardComponent = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="w-68 h-112.5 relative px-2 shadow-md shadow-gray-400 m-5 rounded-[30px] cursor-pointer">
        <div className="absolute px-5 py-2 bg-black backdrop-blur-3xl right-5 top-5 rounded-full">
            <p className="text-white">{pokemon.name}</p>
        </div>
        <div className="h-75 w-full mb-3 bg-amber-500 rounded-[30px] overflow-hidden flex items-center flex-col">
            <img src={pokemon.image} width={'100%'} alt={pokemon.name} />
        </div>
        <div className="w-full h-37.5 flex flex-col p-2">
          <h1 className="text-4xl font-bold">{pokemon.name}</h1>
          <div className="flex items-center justify-between mt-5">
            <Link href={`/pokemon/${pokemon.name}`} className="bg-black text-white px-4 py-2 rounded-full text-2xl hover:bg-gray-800 transition duration-300 cursor-pointer">View details</Link>
            <div className="h-12.5 w-12.5 flex items-center justify-center border-2 border-gray-300 rounded-full">
                <FaRegHeart color="red" size={20} />
            </div> 
    

          </div>
        </div>
        
    </div>
  
  )
}

export default CardComponent;