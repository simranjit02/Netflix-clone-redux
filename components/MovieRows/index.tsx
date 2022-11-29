import axios from "../../auth/axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MovieRows = ({ title, fetchUrl, islargeRow=false }: any) => {
  const base_URL = "https://image.tmdb.org/t/p/original";
  const [moviesList, setMoviesList] = useState<any>([]);
//   console.log('moviesList', moviesList)
  const fetchfilms = () => {
    axios.get(fetchUrl).then((res) => {
      setMoviesList(res?.data?.results);
      return res;
    });
  };
  useEffect(() => {
    fetchfilms();
  }, [fetchUrl]);

  return (
    <div>
      <div className="text-white p-5 text-4xl font-semibold ">{title}</div>
      <div className=" hideScrool h-72 gap-x-5 flex overflow-x-scroll overflow-y-hidden w-[98%] mx-auto" >
      {moviesList?.map((item: any, idx: any) => (
          <Image
            src={`${base_URL}${islargeRow ?item?.poster_path:item?.backdrop_path}`}
            alt={item?.nmae}
            objectFit="contain"
            className="hover:scale-110 transition ease-in-out duration-500"
            width={600}
            height={500} 
            key={item?.id} 
          />
  
      ))}</div>
    </div>
  );
};

export default MovieRows;
