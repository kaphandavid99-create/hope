"use client";
import { useState } from "react";
import { HeroComponent } from "./components/HeroComponent";
import Image from "next/image";
import  CardComponent  from "./components/CardComponent";
import { Pokemons, Types } from "./utils/data";
import {  FiSearch } from  "react-icons/fi";



const page = () => {
  const [SearchTerm, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Filter by search
  let searchResults = Pokemons.filter ((pokemon) => pokemon.name.toLowerCase().includes(SearchTerm.toLowerCase())
);

// Filter by type
  const filteredResult = selectedType ? searchResults.filter(
    (item) => item.type.toLowerCase() === selectedType.toLowerCase(),
): searchResults; searchResults = filteredResult;

  return (
    
 <div className= "w-full flex items-center justify-center h-full flex-col p-4 md:p-10">
  
  <HeroComponent title="Home" desc="This is the home page" />
  {/* Search bar */}
  <div className="flex items-center justify-between mt-5 w-full max-w-2xl mb-10 bg-gray-500 px-4 md:px-5 py-3 rounded-full">
    <input type="text"
    placeholder="Search Pokemon..."
    value={SearchTerm} 
    onChange={e =>
    setSearchTerm(e.target.value)}
    className="outline-none text-white w-full text-lg md:text-xl" />
    <FiSearch size={32} color="#fff" className="hidden md:block" />
    <FiSearch size={24} color="#fff" className="md:hidden" />
  </div>

  {/* Types */}
  <div className="flex gap-3 md:gap-5 items-center justify-center w-full flex-wrap">
    <div
    className="w-20 h-10 md:w-25 md:h-12.5 cursor-pointer rounded-full flex items-center justify-center bg-black"
    onClick={() => setSelectedType(null)}>
       <h3 className="text-white">All</h3>
    </div>
    {Types.map((type) => (
      <div
      key={type.name}
      style={{ backgroundColor: type.color }}
      className= {'w-20 h-10 md:w-25 md:h-12.5 cursor-pointer rounded-full flex items-center justify-center'}
      onClick={() => setSelectedType(type.name)}>
        <h3 className="text-white">{type.name}</h3>
      </div>
    ))}
    </div>

 <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {searchResults.map((pokemon) => (
    <CardComponent pokemon={pokemon} key={pokemon.id} />
  ))}
 </div>
  
  </div>
  );
};


export default page;