import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movies() {
    
    return (
      <div className="px-10 py-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-3.5">Blockbuster Re-releasing</h1>
        <div className='w-full h-[500px] overflow-hidden bg-zinc-900 shadow-xl flex flex-row p-4.5 mb-2.5 '>
        <img className="h-[98%] w-[65%] rounded-lg" src="https://sm.mashable.com/t/mashable_me/photo/default/1_npc3.1248.jpg" alt="" />
        <div className="flex flex-col h-full w-[35%] items-center justify-center">
            <h1 className="text-gray-50 font-bold text-5xl mb-3.5">Interstellar</h1>
            <div className="flex gap-3">

            <h2 className="my-4 text-zinc-800 bg-gray-50 p-1 text-md font-semibold">2D, IMAX 2D, 4DX</h2>
            <h2 className="my-4 text-zinc-800 bg-gray-50 p-1 text-md font-semibold">English</h2>
            </div>

            <p className="text-white text-md font-semibold">2h 49m | Action, Adventure, Sci-Fi | 7 Nov, 2014</p>
            <div className="flex gap-3">
            <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-9 py-3 rounded-lg cursor-pointer my-3'>Book tickets</button>
            <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-9 py-3 rounded-lg cursor-pointer my-3'>Buy or Rent</button>
            </div>
        </div>
        </div>
        
        
        <h1 className="text-2xl font-bold mt-10">Recommended Movies</h1>
        <div className="py-10 flex gap-20 flex-col md:flex-row flex-wrap mx-auto ">
        <MovieCard 
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAyODkuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wqmumfxjtk-portrait.jpg"
            name="Chaava"
            genre="Action/Drama/Historical"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0OC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331567-krcdvtmaas-portrait.jpg"
            name="Dune: Part Two"
            genre="Action/Sci-fi/Adventure"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363454-uhxlvjxybt-portrait.jpg"
            name="The Diplomat"
            genre="Action/Thriller"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni45LzEwICAzLjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430518-pbbpufjmrb-portrait.jpg"
            name="Mere Husband Ki Biwi"
            genre="Comedy/Romantic"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA3LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432204-euccgryvlj-portrait.jpg"
            name="Crazyxy"
            genre="Drama/Thriller"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MksgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00436309-kzahsjhcds-portrait.jpg"
            name="Novocaine"
            genre="Action/Comedy/Thriller"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMy4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00412372-bszwfqkltb-portrait.jpg"
            name="Mickey 17"
            genre="Fantasy/Adventure/Comedy"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS42SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00433709-letdgjlzxw-portrait.jpg"
            name="Six Each"
            genre="Comedy/Suspense"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA3LjZLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432204-euccgryvlj-portrait.jpg"
            name="Crazyxy"
            genre="Drama/Thriller"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS42SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00433709-letdgjlzxw-portrait.jpg"
            name="Six Each"
            genre="Comedy/Suspense"
        />
        <MovieCard
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzFLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00363454-uhxlvjxybt-portrait.jpg"
            name="The Diplomat"
            genre="Action/Thriller"
        />
        <MovieCard 
            img="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAyODkuN0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wqmumfxjtk-portrait.jpg"
            name="Chaava"
            genre="Action/Drama/Historical"
        />
        </div>
      </div>
    );
  }
  
  export default Movies;
  