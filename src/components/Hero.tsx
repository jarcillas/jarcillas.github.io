import profilePhoto from "../assets/profile-photo.jpg";

const Hero = () => {
  return (
    <div className="flex-grow max-h-140 bg-base-200 flex flex-shrink lg:flex-row flex-col w-full justify-between items-center">
      <div className="text-center text-primary flex-1/3 flex flex-col justify-center">
        <div className="max-w-md">
          <img className="rounded-full size-64" src={profilePhoto}></img>
        </div>
      </div>
      <div className="text-primary flex items-center flex-2/3">
        <div className="max-w-md font-mono select-none">
          <h1 className="text-[60px] sm:text-[80px] lg:text-[120px] text-center lg:text-left font-bold mb-4 leading-[60px] sm:leading-[80px] lg:leading-[120px] mt-8 lg:mt-0 glow">
            JESREAL ARCILLAS
          </h1>
          <h2 className="text-[38px] text-secondary text-center lg:text-left">
            Front End Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export { Hero };
