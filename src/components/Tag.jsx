import React from 'react'

import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner"; 
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false); 
  const [tag ,setTag]=useState('')
  // async function fetchData() {
  //     setLoading(true) 
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     console.log(imageSource);
  //     setLoading(false);
  //   }
  //   useEffect (() => {
  //     fetchData();
  //   }, []);
  //   function clickHandler(event){
  //     fetchData();
  //   }
  //   function changeHandler(event){
  //     SetTag(event.target.value)
  //   }
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="w-1/2 height bg-gradient-to-r from-blue-300 via-white to-pink-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? <Spinner/> : (
          <img src={gif} key={gif} alt='' width="450" height={450}   />
        )
      } 
      <input className='w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px] text-center' oonChange={(event) => setTag(event.target.value)}></input>
      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 bg-yellow-400 text-xl py-2 rounded-lg font-bold mb-[20px]"
      >
        Generate
      </button>
    </div>
  )
}

export default Tag