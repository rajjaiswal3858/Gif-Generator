import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full full h-full flex flex-col background  items-center overflow-x-hidden overflow-y-scroll">
      <h1 className="bg-white rounded-lg uppercase w-11/12 text-center mt-[40px] ml-[15px] py-2 px-10 text-4xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] h-full overflow-y-scroll">
        <Random />
        <Tag />
      </div>
    </div>
  );
}