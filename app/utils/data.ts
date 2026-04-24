export const Types = [
    
    {
        "name": "Electric",
        "color": "#F8D030"
    },
    {
        "name": "Fire",
        "color": "#F08030"
    },
    {
        "name": "Water",
        "color": "#6890F0"
    },
    {
        "name": "Grass",
        "color": "#78C850"
    },
    {
        "name": "Fairy",
        "color": "#EE99AC"
    },
    {
        "name": "Normal",
        "color": "#A8A878"
    },
    {
        "name": "Fighting",
        "color": "#C03028"
    },
    {
        "name": "Rock",
        "color": "#B8A038"
  },
    {
        "name": "Ground",
        "color": "#B8A038"
  },
    {
        "name": "Ghost",
        "color": "#B8A038"
  },
  //   {
  //       "name": "Electric/Steel",
  //       "color": "#B8A038"
  // },
  
  //   {
  //       "name": "Rock/Ground",
  //       "color": "#B8A038"
  // },
  
  //   {
  //       "name": "Rock/Water",
  //       "color": "#B8A038"
  // },
  
    

]
export const Pokemons = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    hp: 60,
    attack: [
      { name: "Thunder Shock", damage: 20 },
      { name: "Electro Ball", damage: 50 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",

    category: "Mouse Pokémon",
    description: "It stores electricity in its cheeks and releases it in bursts.",
    height: "0.4 m",
    weight: "6.0 kg",
    abilities: ["Static"],
    hiddenAbility: "Lightning Rod",
    weaknesses: ["Ground"],
    resistances: ["Electric", "Flying", "Steel"],
    stats: { attack: 55, defense: 40, spAtk: 50, spDef: 50, speed: 90 },
    evolution: { from: "Pichu", to: "Raichu", level: null }
  },

  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    hp: 50,
    attack: [
      { name: "Scratch", damage: 10 },
      { name: "Flame Tail", damage: 30 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",

    category: "Lizard Pokémon",
    description: "The flame on its tail shows the strength of its life.",
    height: "0.6 m",
    weight: "8.5 kg",
    abilities: ["Blaze"],
    hiddenAbility: "Solar Power",
    weaknesses: ["Water", "Rock", "Ground"],
    resistances: ["Fire", "Grass", "Ice"],
    stats: { attack: 52, defense: 43, spAtk: 60, spDef: 50, speed: 65 },
    evolution: { from: null, to: "Charmeleon", level: 16 }
  },

  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    hp: 50,
    attack: [
      { name: "Water Gun", damage: 20 },
      { name: "Aqua Tail", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",

    category: "Tiny Turtle Pokémon",
    description: "Its shell helps it swim at high speeds.",
    height: "0.5 m",
    weight: "9.0 kg",
    abilities: ["Torrent"],
    hiddenAbility: "Rain Dish",
    weaknesses: ["Electric", "Grass"],
    resistances: ["Fire", "Water", "Ice"],
    stats: { attack: 48, defense: 65, spAtk: 50, spDef: 64, speed: 43 },
    evolution: { from: null, to: "Wartortle", level: 16 }
  },

  {
    id: 4,
    name: "Bulbasaur",
    type: "Grass",
    hp: 60,
    attack: [
      { name: "Vine Whip", damage: 30 },
      { name: "Razor Leaf", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",

    category: "Seed Pokémon",
    description: "A plant seed grows on its back absorbing sunlight.",
    height: "0.7 m",
    weight: "6.9 kg",
    abilities: ["Overgrow"],
    hiddenAbility: "Chlorophyll",
    weaknesses: ["Fire", "Ice", "Flying"],
    resistances: ["Water", "Electric", "Grass"],
    stats: { attack: 49, defense: 49, spAtk: 65, spDef: 65, speed: 45 },
    evolution: { from: null, to: "Ivysaur", level: 16 }
  },

  {
    id: 5,
    name: "Jigglypuff",
    type: "Fairy",
    hp: 70,
    attack: [
      { name: "Sing", damage: 0 },
      { name: "Pound", damage: 20 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",

    category: "Balloon Pokémon",
    description: "Its song puts enemies to sleep.",
    height: "0.5 m",
    weight: "5.5 kg",
    abilities: ["Cute Charm"],
    hiddenAbility: "Friend Guard",
    weaknesses: ["Steel", "Poison"],
    resistances: ["Fighting", "Dark"],
    stats: { attack: 45, defense: 20, spAtk: 45, spDef: 25, speed: 20 },
    evolution: { from: "Igglybuff", to: "Wigglytuff", level: null }
  },

  {
    id: 6,
    name: "Meowth",
    type: "Normal",
    hp: 50,
    attack: [
      { name: "Scratch", damage: 10 },
      { name: "Bite", damage: 30 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",

    category: "Scratch Cat Pokémon",
    description: "It loves shiny coins and objects.",
    height: "0.4 m",
    weight: "4.2 kg",
    abilities: ["Pickup", "Technician"],
    hiddenAbility: "Unnerve",
    weaknesses: ["Fighting"],
    resistances: [],
    stats: { attack: 45, defense: 35, spAtk: 40, spDef: 40, speed: 90 },
    evolution: { from: null, to: "Persian", level: 28 }
  },

  {
    id: 7,
    name: "Psyduck",
    type: "Water",
    hp: 60,
    attack: [
      { name: "Confusion", damage: 30 },
      { name: "Water Pulse", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",

    category: "Duck Pokémon",
    description: "Headaches trigger its psychic powers.",
    height: "0.8 m",
    weight: "19.6 kg",
    abilities: ["Damp", "Cloud Nine"],
    hiddenAbility: "Swift Swim",
    weaknesses: ["Electric", "Grass"],
    resistances: ["Fire", "Water"],
    stats: { attack: 52, defense: 48, spAtk: 65, spDef: 50, speed: 55 },
    evolution: { from: null, to: "Golduck", level: 33 }
  },

  {
    id: 8,
    name: "Machop",
    type: "Fighting",
    hp: 70,
    attack: [
      { name: "Low Kick", damage: 30 },
      { name: "Karate Chop", damage: 50 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",

    category: "Superpower Pokémon",
    description: "It trains by lifting heavy rocks.",
    height: "0.8 m",
    weight: "19.5 kg",
    abilities: ["Guts", "No Guard"],
    hiddenAbility: "Steadfast",
    weaknesses: ["Flying", "Psychic"],
    resistances: ["Rock", "Bug"],
    stats: { attack: 80, defense: 50, spAtk: 35, spDef: 35, speed: 35 },
    evolution: { from: null, to: "Machoke", level: 28 }
  },

  {
    id: 9,
    name: "Geodude",
    type: "Rock",
    hp: 60,
    attack: [
      { name: "Rock Throw", damage: 40 },
      { name: "Tackle", damage: 20 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",

    category: "Rock Pokémon",
    description: "Often mistaken for stones.",
    height: "0.4 m",
    weight: "20.0 kg",
    abilities: ["Rock Head", "Sturdy"],
    hiddenAbility: "Sand Veil",
    weaknesses: ["Water", "Grass"],
    resistances: ["Normal", "Fire"],
    stats: { attack: 80, defense: 100, spAtk: 30, spDef: 30, speed: 20 },
    evolution: { from: null, to: "Graveler", level: 25 }
  },

  {
    id: 10,
    name: "Eevee",
    type: "Normal",
    hp: 55,
    attack: [
      { name: "Quick Attack", damage: 30 },
      { name: "Swift", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",

    category: "Evolution Pokémon",
    description: "It can evolve into many forms.",
    height: "0.3 m",
    weight: "6.5 kg",
    abilities: ["Run Away", "Adaptability"],
    hiddenAbility: "Anticipation",
    weaknesses: ["Fighting"],
    resistances: [],
    stats: { attack: 55, defense: 50, spAtk: 45, spDef: 65, speed: 55 },
    evolution: { from: null, to: "Multiple", level: null }
  },

  {
    id: 11,
    name: "Vulpix",
    type: "Fire",
    hp: 50,
    attack: [
      { name: "Ember", damage: 30 },
      { name: "Quick Attack", damage: 20 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",

    category: "Fox Pokémon",
    description: "Controls flames with precision.",
    height: "0.6 m",
    weight: "9.9 kg",
    abilities: ["Flash Fire"],
    hiddenAbility: "Drought",
    weaknesses: ["Water", "Rock"],
    resistances: ["Fire", "Grass"],
    stats: { attack: 41, defense: 40, spAtk: 50, spDef: 65, speed: 65 },
    evolution: { from: null, to: "Ninetales", level: null }
  },

  {
    id: 12,
    name: "Snorlax",
    type: "Normal",
    hp: 120,
    attack: [
      { name: "Body Slam", damage: 60 },
      { name: "Rest", damage: 0 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",

    category: "Sleeping Pokémon",
    description: "It eats and sleeps all day.",
    height: "2.1 m",
    weight: "460 kg",
    abilities: ["Immunity", "Thick Fat"],
    hiddenAbility: "Gluttony",
    weaknesses: ["Fighting"],
    resistances: ["Ghost"],
    stats: { attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30 },
    evolution: { from: "Munchlax", to: null, level: null }
  },

  {
    id: 13,
    name: "Gengar",
    type: "Ghost",
    hp: 60,
    attack: [
      { name: "Shadow Ball", damage: 50 },
      { name: "Lick", damage: 30 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",

    category: "Shadow Pokémon",
    description: "It hides in shadows and steals warmth.",
    height: "1.5 m",
    weight: "40.5 kg",
    abilities: ["Cursed Body"],
    hiddenAbility: null,
    weaknesses: ["Ghost", "Dark"],
    resistances: ["Grass", "Poison"],
    stats: { attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110 },
    evolution: { from: "Haunter", to: null, level: null }
  },

  {
    id: 14,
    name: "Lapras",
    type: "Water",
    hp: 100,
    attack: [
      { name: "Ice Beam", damage: 50 },
      { name: "Surf", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",

    category: "Transport Pokémon",
    description: "Carries people across seas.",
    height: "2.5 m",
    weight: "220 kg",
    abilities: ["Water Absorb", "Shell Armor"],
    hiddenAbility: "Hydration",
    weaknesses: ["Electric", "Grass"],
    resistances: ["Water", "Ice"],
    stats: { attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60 },
    evolution: { from: null, to: null, level: null }
  },

  {
    id: 15,
    name: "Ponyta",
    type: "Fire",
    hp: 50,
    attack: [
      { name: "Ember", damage: 40 },
      { name: "Stomp", damage: 30 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",

    category: "Fire Horse Pokémon",
    description: "Runs faster than the wind.",
    height: "1.0 m",
    weight: "30.0 kg",
    abilities: ["Run Away", "Flash Fire"],
    hiddenAbility: "Flame Body",
    weaknesses: ["Water", "Rock"],
    resistances: ["Fire", "Grass"],
    stats: { attack: 85, defense: 55, spAtk: 65, spDef: 65, speed: 90 },
    evolution: { from: null, to: "Rapidash", level: 40 }
  },

  {
    id: 16,
    name: "Sandshrew",
    type: "Ground",
    hp: 50,
    attack: [
      { name: "Scratch", damage: 20 },
      { name: "Sand Attack", damage: 10 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",

    category: "Mouse Pokémon",
    description: "Burrows underground to stay safe.",
    height: "0.6 m",
    weight: "12.0 kg",
    abilities: ["Sand Veil"],
    hiddenAbility: "Sand Rush",
    weaknesses: ["Water", "Grass"],
    resistances: ["Poison"],
    stats: { attack: 75, defense: 85, spAtk: 20, spDef: 30, speed: 40 },
    evolution: { from: null, to: "Sandslash", level: 22 }
  },

  {
    id: 17,
    name: "Poliwag",
    type: "Water",
    hp: 40,
    attack: [
      { name: "Bubble", damage: 20 },
      { name: "Hypnosis", damage: 0 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",

    category: "Tadpole Pokémon",
    description: "Its spiral belly shows its organs.",
    height: "0.6 m",
    weight: "12.4 kg",
    abilities: ["Water Absorb", "Damp"],
    hiddenAbility: "Swift Swim",
    weaknesses: ["Electric", "Grass"],
    resistances: ["Fire", "Water"],
    stats: { attack: 50, defense: 40, spAtk: 40, spDef: 40, speed: 90 },
    evolution: { from: null, to: "Poliwhirl", level: 25 }
  },

  {
    id: 18,
    name: "Magnemite",
    type: "Electric/Steel",
    hp: 25,
    attack: [
      { name: "Thunder Shock", damage: 40 },
      { name: "Magnet Bomb", damage: 60 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",

    category: "Magnet Pokémon",
    description: "Floats using electromagnetic waves.",
    height: "0.3 m",
    weight: "6.0 kg",
    abilities: ["Magnet Pull", "Sturdy"],
    hiddenAbility: "Analytic",
    weaknesses: ["Fire", "Ground"],
    resistances: ["Electric", "Flying", "Steel"],
    stats: { attack: 35, defense: 70, spAtk: 95, spDef: 55, speed: 45 },
    evolution: { from: null, to: "Magneton", level: 30 }
  },

  {
    id: 19,
    name: "Onix",
    type: "Rock/Ground",
    hp: 35,
    attack: [
      { name: "Tackle", damage: 20 },
      { name: "Rock Throw", damage: 40 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",

    category: "Rock Snake Pokémon",
    description: "Burrows underground at high speed.",
    height: "8.8 m",
    weight: "210 kg",
    abilities: ["Rock Head", "Sturdy"],
    hiddenAbility: "Weak Armor",
    weaknesses: ["Water", "Grass"],
    resistances: ["Fire", "Electric"],
    stats: { attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70 },
    evolution: { from: null, to: "Steelix", level: null }
  },

  {
    id: 20,
    name: "Kabuto",
    type: "Rock/Water",
    hp: 30,
    attack: [
      { name: "Scratch", damage: 10 },
      { name: "Hydro Pump", damage: 6 }
    ],
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",

    category: "Shellfish Pokémon",
    description: "A fossil Pokémon revived from ancient seas.",
    height: "0.5 m",
    weight: "11.5 kg",
    abilities: ["Swift Swim", "Battle Armor"],
    hiddenAbility: "Weak Armor",
    weaknesses: ["Electric", "Grass"],
    resistances: ["Fire", "Ice"],
    stats: { attack: 80, defense: 90, spAtk: 55, spDef: 45, speed: 55 },
    evolution: { from: null, to: "Kabutops", level: 40 }
  }
];