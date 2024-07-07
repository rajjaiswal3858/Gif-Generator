import React from 'react'
 
import Spinner from "./Spinner"; 
import useGif from "../hooks/useGif";
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false); 
  // async function fetchData() {
  //     setLoading(true) 
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&rating=s`;
  
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     console.log(imageSource);
  //     setLoading(false);
  //   }
  //   useEffect (() => {
  //     fetchData();
  //   }, []);
  //   function clickHandler(){
  //     fetchData();
  //   }
  const { gif, loading, fetchData } = useGif();
  return (
    <div className="w-1/2 height  bg-gradient-to-r from-blue-300 via-white to-pink-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      <h1 className="mt-[15px] text-3xl uppercase underline font-bold">A Random Gif</h1>
      {
        loading ? <Spinner/> : (
          <img src={gif} key={gif} alt='' width="450" height={450}   />
        )
      } 
      <button
        onClick={()=> fetchData()}
        className="w-10/12  text-xl py-2 rounded-lg font-bold mb-[20px] bg-yellow-400"
      >
        Generate
      </button>
    </div>
  )
}

export default Random