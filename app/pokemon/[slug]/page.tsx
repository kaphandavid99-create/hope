import { Pokemons, Types } from '@/app/utils/data';
import React from 'react'
import Link from 'next/link';
import { GiCrossedSwords } from 'react-icons/gi';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const pokemonSelected = Pokemons.find((pokemon) => pokemon.name.toLowerCase() === slug.toLowerCase());

  if (!pokemonSelected) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Pokemon Not Found</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 underline font-semibold">Go Back Home</Link>
        </div>
      </div>
    );
  }

  const typeColor = Types.find(t => t.name === pokemonSelected.type)?.color || '#888';
  const maxDamage = Math.max(...pokemonSelected.attack.map(a => a.damage), 100);

  // Convert hex to rgba for opacity
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-2 px-4 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-2 text-white/70 hover:text-cyan-400 font-semibold transition-all duration-300 flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> 
          <span className="group-hover:underline decoration-cyan-400">Back to All Pokemon</span>
        </Link>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 transform hover:scale-[1.01] transition-all duration-500">
          {/* Header with Image */}
          <div 
            className="relative p-4 flex flex-col md:flex-row items-center gap-4"
            style={{ 
              background: `linear-gradient(135deg, ${typeColor} 0%, ${hexToRgba(typeColor, 0.4)} 50%, ${hexToRgba(typeColor, 0.2)} 100%)` 
            }}
          >
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/10" style={{ animation: 'gradient 3s ease infinite', backgroundSize: '200% 200%' }}></div>
            
            <div className="relative z-10">
              <div className="relative group">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl scale-75 group-hover:scale-100 transition-transform duration-500"></div>
                <img 
                  src={pokemonSelected.image} 
                  alt={pokemonSelected.name} 
                  className="relative w-40 h-40 object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
              </div>
            </div>
            <div className="relative z-10 text-white text-center md:text-left">
              <div className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-1 border border-white/30 shadow-lg">
                #{pokemonSelected.id.toString().padStart(3, '0')}
              </div>
              <h1 className="text-3xl font-black mb-1 drop-shadow-2xl tracking-tight">{pokemonSelected.name}</h1>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="inline-block px-4 py-1 bg-white/25 backdrop-blur-md rounded-xl text-base font-bold border-2 border-white/40 shadow-xl hover:bg-white/30 transition-colors">
                  {pokemonSelected.type}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="p-4 space-y-3 bg-gradient-to-b from-transparent to-black/20">
            
            {/* HP Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/60 to-orange-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-red-600/60 to-orange-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-white mb-1 tracking-wide">HP</h2>
                    <p className="text-white/80 text-xs font-medium">Health Points</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-white drop-shadow-lg">{pokemonSelected.hp}</p>
                  </div>
                </div>
                <div className="mt-2 w-full bg-black/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-white to-white/80 transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${Math.min((pokemonSelected.hp / 150) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Attacks Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/40 to-blue-600/40 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-700/70 to-slate-800/70 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                <h2 className="text-xl font-black text-white mb-3 flex items-center gap-3 tracking-wide">
                  <GiCrossedSwords className="w-7 h-7 text-cyan-300 animate-bounce" />
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Attack Moves</span>
                </h2>
                <div className="space-y-2">
                  {pokemonSelected.attack.map((move, index) => {
                    const damagePercent = (move.damage / maxDamage) * 100;
                    let damageColor = 'from-green-500/70 to-emerald-600/70';
                    if (move.damage >= 50) damageColor = 'from-red-500/70 to-rose-600/70';
                    else if (move.damage >= 30) damageColor = 'from-yellow-500/70 to-amber-600/70';
                    else if (move.damage >= 20) damageColor = 'from-orange-500/70 to-orange-600/70';
                    
                    return (
                      <div key={index} className="relative group/move">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl blur-lg opacity-0 group-hover/move:opacity-100 transition-opacity"></div>
                        <div className="relative bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-base font-bold text-white tracking-wide">{move.name}</p>
                            <span className={`px-3 py-1 bg-gradient-to-r ${damageColor} text-white rounded-full font-black text-sm shadow-xl transform hover:scale-110 transition-transform`}>
                              {move.damage} DMG
                            </span>
                          </div>
                          <div className="w-full bg-black/40 rounded-full h-3 overflow-hidden shadow-inner">
                            <div 
                              className={`h-3 rounded-full bg-gradient-to-r ${damageColor} transition-all duration-1000 ease-out relative shadow-lg`}
                              style={{ width: `${damagePercent}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ animation: 'shimmer 2s infinite' }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-1 text-xs text-gray-400 font-medium">
                            <span>POWER LEVEL</span>
                            <span className="text-cyan-400 font-bold">{Math.round(damagePercent)}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Type Info Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/60 to-pink-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-purple-600/60 to-pink-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-black text-white mb-1 tracking-wide">Type</h2>
                    <p className="text-white/80 text-xs font-medium">Pokemon Element</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-white drop-shadow-lg">{pokemonSelected.type}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/60 to-purple-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-indigo-600/60 to-purple-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                <h2 className="text-lg font-black text-white mb-2 tracking-wide">Description</h2>
                <p className="text-white/90 text-xs leading-relaxed">{pokemonSelected.description}</p>
              </div>
            </div>

            {/* Physical Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/60 to-cyan-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-teal-600/60 to-cyan-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                  <h2 className="text-base font-black text-white mb-1 tracking-wide">Height</h2>
                  <p className="text-xl font-bold text-white">{pokemonSelected.height}</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/60 to-blue-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-cyan-600/60 to-blue-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                  <h2 className="text-base font-black text-white mb-1 tracking-wide">Weight</h2>
                  <p className="text-xl font-bold text-white">{pokemonSelected.weight}</p>
                </div>
              </div>
            </div>

            {/* Abilities */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/60 to-orange-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-amber-600/60 to-orange-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                <h2 className="text-lg font-black text-white mb-2 tracking-wide">Abilities</h2>
                <div className="flex flex-wrap gap-2">
                  {pokemonSelected.abilities.map((ability, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                      {ability}
                    </span>
                  ))}
                  {pokemonSelected.hiddenAbility && (
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-semibold text-white/70 border border-white/20">
                      Hidden: {pokemonSelected.hiddenAbility}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Weaknesses & Resistances */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/60 to-rose-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-red-600/60 to-rose-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                  <h2 className="text-base font-black text-white mb-2 tracking-wide">Weaknesses</h2>
                  <div className="flex flex-wrap gap-2">
                    {pokemonSelected.weaknesses.length > 0 ? (
                      pokemonSelected.weaknesses.map((weakness, index) => (
                        <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                          {weakness}
                        </span>
                      ))
                    ) : (
                      <span className="text-white/70 text-xs">None</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/60 to-emerald-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-green-600/60 to-emerald-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                  <h2 className="text-base font-black text-white mb-2 tracking-wide">Resistances</h2>
                  <div className="flex flex-wrap gap-2">
                    {pokemonSelected.resistances.length > 0 ? (
                      pokemonSelected.resistances.map((resistance, index) => (
                        <span key={index} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/30">
                          {resistance}
                        </span>
                      ))
                    ) : (
                      <span className="text-white/70 text-xs">None</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Base Stats */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/40 to-purple-600/40 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-700/70 to-slate-800/70 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl">
                <h2 className="text-xl font-black text-white mb-3 tracking-wide">Base Stats</h2>
                <div className="space-y-2">
                  {Object.entries(pokemonSelected.stats).map(([stat, value]) => {
                    const statPercent = (value / 160) * 100;
                    const statColors: Record<string, string> = {
                      attack: 'from-red-500/70 to-rose-600/70',
                      defense: 'from-blue-500/70 to-cyan-600/70',
                      spAtk: 'from-purple-500/70 to-pink-600/70',
                      spDef: 'from-green-500/70 to-emerald-600/70',
                      speed: 'from-yellow-500/70 to-amber-600/70'
                    };
                    const statLabels: Record<string, string> = {
                      attack: 'Attack',
                      defense: 'Defense',
                      spAtk: 'Sp. Atk',
                      spDef: 'Sp. Def',
                      speed: 'Speed'
                    };
                    return (
                      <div key={stat} className="flex items-center gap-2">
                        <span className="w-14 text-xs font-semibold text-white/80">{statLabels[stat]}</span>
                        <div className="flex-1 bg-black/40 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${statColors[stat]} transition-all duration-1000 ease-out`}
                            style={{ width: `${statPercent}%` }}
                          ></div>
                        </div>
                        <span className="w-8 text-xs font-bold text-white text-right">{value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Evolution */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/60 to-rose-600/60 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-pink-600/60 to-rose-600/60 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/10">
                <h2 className="text-lg font-black text-white mb-2 tracking-wide">Evolution</h2>
                <div className="flex items-center gap-3 text-white">
                  <div className="text-center">
                    <p className="text-xs text-white/70 mb-1">From</p>
                    <p className="font-semibold">{pokemonSelected.evolution.from || 'None'}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {pokemonSelected.evolution.level ? (
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-semibold">Lv. {pokemonSelected.evolution.level}</span>
                    ) : (
                      <span className="text-white/50">→</span>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-white/70 mb-1">To</p>
                    <p className="font-semibold">{pokemonSelected.evolution.to || 'None'}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `
      }} />
    </div>
  );
}
