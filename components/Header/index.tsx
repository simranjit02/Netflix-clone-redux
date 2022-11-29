import Image from "next/image";
import Logo from "../../assets/svg/Netflix_2015_logo.svg";
import User from "../../assets/images/Netflix-avatar.png";
import { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from "../../auth/axios";
import request from '../../auth/request'
const Header = () => {
  const [animation, setAnimation] = useState(false);
  const [movie, setMovie] = useState<any>([])
  const translate = () => {
    if (window.scrollY > 100) {
      setAnimation(true);
    } else {
      setAnimation(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", translate);
    return () => window.addEventListener("scroll", translate);
  }, []);
  const fetchMovies=()=>{
    axios.get(request.fetchNetflixOriginals).then((responce)=>{
      setMovie(responce?.data?.results[
        Math.floor(Math.random()*responce?.data?.results.length-1)
      ])
    })
  }
  useEffect(()=>{
    fetchMovies()
  },[])

  return (
    <div>
      <div
        className={` ${
          animation
            ? ` bg-black ease-in duration-100`
            : `bg-transparent ease-in duration-100 `
        }  px-4 py-3.5 flex justify-between fixed w-full z-40 `}
      >
        <div className="mt-2">
          <Image src={Logo} alt="Netflix Logo" width={150} height={32} />
        </div>
        <div className="">
          <Image src={User} alt="user Logo" width={45} height={45} />
        </div>
      </div>
     
    <div className="" >
      <Banner 
    movie={movie}
      />
    </div>
    </div>
  );
};

export default Header;
