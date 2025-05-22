import profilePhoto from "../assets/profile-photo.jpg";

const Hero = () => {
  return (
    <div className="flex-grow max-h-160 bg-base-200 flex flex-row w-full justify-between items-start pt-24">
      <div className="text-center text-primary flex-1/3 flex flex-col justify-center">
        <div className="max-w-md">
          <img className="rounded-full size-64" src={profilePhoto}></img>
        </div>
      </div>
      <div className="text-primary flex items-center flex-2/3">
        <div className="max-w-md font-mono select-none">
          <h1 className="text-[120px] font-bold mb-4 leading-[120px] glow">
            JESREAL ARCILLAS
          </h1>
          <h2 className="text-[38px] text-secondary">Front End Developer</h2>
        </div>
      </div>
    </div>
  );
};

export { Hero };
