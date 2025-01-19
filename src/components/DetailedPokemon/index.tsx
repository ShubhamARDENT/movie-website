import {
  Ievolution,
  Ispecies,
  Iweakness,
  simplePokemon,
} from "../../interface/interfaces";

interface IDetailedPokemon {
  PokemonWeakness: Iweakness;
  evolution: Ievolution;
  species: Ispecies;
  pokemon: simplePokemon | null;
}
const DetailedPokemon = ({
  pokemon,
  species,
  PokemonWeakness,
}: IDetailedPokemon) => {
  // console.log(evolution), 'hello')

  const typeColors: { [key: string]: string } = {
    grass: "bg-green-500 text-green-900", // Green for Grass type
    water: "bg-blue-500 text-blue-900", // Blue for Water type
    fire: "bg-red-500 text-red-900", // Red for Fire type
    electric: "bg-yellow-500 text-yellow-900", // Yellow for Electric type
    poison: "bg-purple-500 text-purple-900", // Purple for Poison type
    psychic: "bg-pink-500 text-pink-900", // Pink for Psychic type
    bug: "bg-green-500 text-green-900", // Dark Green for Bug type
    dragon: "bg-indigo-500 text-indigo-900", // Indigo for Dragon type
    fairy: "bg-pink-500 text-pink-900", // Light Pink for Fairy type
    normal: "bg-gray-500 text-gray-900", //gray for normal type
    flying: "bg-blue-600 text-white",
    steel: "bg-gray-500 text-white",
    rock: "bg-green-500 text-red-900",
    fighting: "bg-red-500 text-white",
    ground: "bg-green-500 text-red-900",
    ice: "bg-cyan-500 text-white",
    ghost: "bg-black text-white",
  };
  const statNames = [
    { status: "HP", color: "bg-red-500" },
    { status: "ATK", color: "bg-orange-400" },
    { status: "Def", color: "bg-yellow-300" },
    { status: "SpA", color: "bg-cyan-300" },
    { status: "SpD", color: "bg-green-600" },
    { status: "SPD", color: "bg-pink-500" },
  ];
  if (!pokemon) {
    return <div>loading...</div>;
  }

  const { front_default } = pokemon.sprites.other["official-artwork"];

  return (
    <>
      <div
        className="shadow-md 
                 rounded-2xl
               bg-white
                flex
                flex-col
                items-center
                 w-[100%]
                 h-[90%]
                 px-8
                "
      >
    
          <img src={front_default} alt="" className="w-[200px] -mt-32"/>
        <p className="font-bold text-2xl h-[35px] my-5 overflow-hidden">
          {pokemon.name}
        </p>
        {/* here */}
        <div className="flex justify-between gap-3 flex-wrap">
          {pokemon.types.map((type, index) => {
            const typeColor = typeColors[type.type.name];
            return (
              <span
                key={index}
                className={`${typeColor} text-sm color px-5 py-2 font-bold rounded-md`}
              >
                {type.type.name}
              </span>
            );
          })}
        </div>
        <span className="font-bold text-xl my-3 uppercase">PokéDex Entry</span>
        <p className="font-semibold">
          {species.flavor_text_entries[8].flavor_text}
        </p>
        <span className="font-bold text-base my-6 uppercase">Abilities</span>
        <div className="flex justify-between gap-2">
          {pokemon.abilities.map((eachAbility, index) => {
            return (
              <span
                key={index}
                className="
                      bg-gray-200
                         px-[15px] py-[5px]
                         rounded-3xl
                         font-semibold 
                         border-solid border-2
                         border-blue-300
                        "
              >
                {eachAbility.ability.name}
              </span>
            );
          })}
        </div>

        <div className="flex justify-between my-5 gap-2">
          <div className="flex flex-col items-center">
            <span className="font-bold uppercase">Height</span>
            <span
              className="bg-gray-200 
                   font-semibold px-[43px] py-[5px] rounded-3xl
                    "
            >
              {pokemon.height}m
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold uppercase">Weight</span>
            <span
              className="bg-gray-200 
                   font-semibold px-[43px] py-[5px] rounded-3xl"
            >
              {pokemon.weight}Kg
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col items-center">
            <span className="font-bold uppercase">weaknesses</span>
            <span
              className="bg-gray-200 
                   font-semibold px-[50px] py-[5px] rounded-3xl
                    "
            >
              {pokemon.height}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold uppercase">Base exp</span>
            <span
              className="bg-gray-200 
                   font-semibold px-[55px] py-[5px] rounded-3xl"
            >
              {pokemon.base_experience}
            </span>
          </div>
        </div>
        <div className="mt-5 text-center">
          <span className="font-bold text-base my-6 uppercase">stats</span>
          {/* dispaly stats */}
          <ul className="flex gap-2 mt-5 justify-between">
            {pokemon.stats.map((stat, index) => {
              const statName = statNames[index].status;

              const statColor = statNames[index].color;
              return (
                <li
                  key={index}
                  className="bg-gray-200 px-1 py-1 rounded-t-full rounded-b-full"
                >
                  <span className="font-bold">
                    <span
                      className={`${statColor} rounded-full px-[7px] py-[6px] font-semibold text-[10px] text-white flex flex-col`}
                    >
                      {statName}
                    </span>
                    {stat.base_stat}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>evolution</p>
        </div>
      </div>
    </>
  );
};

export default DetailedPokemon;
