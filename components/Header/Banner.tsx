const Banner = ({ movie }: any) => {
  const truncate = (string: any, n: any) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="h-[28rem]  text-white pt-[74px] z-30 relative"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="ml-6">
        <div className="text-5xl lg:text-6xl mt-8 font-semibold">{movie?.name}</div>
        <div className="flex mt-4 font-semibold text-sm w-44 justify-between">
          <button className="bg-[#131313a0] py-1.5 w-20 rounded">Play</button>
          <button className="bg-[#131313a0] rounded py-1.5 w-20">
            My List
          </button>
        </div>
        <div className="mt-4 text-base w-4/5 md:w-3/5 lg:w-2/5 lg:text-2xl  min-[480px]:text-lg min-[480px]:font-semibold leading-5">
          {truncate(`${movie?.overview}`, 150)}
        </div>
      </div>
      <div
        className="h-24 absolute bottom-0 w-full z-50"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0) 13%, rgba(0,0,0,1) 77%);",
        }}
      />
    </div>
  );
};

export default Banner;
