import swis from "../assets/swis.png";
import line from "../assets/line.png";

const Resume = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {/* Switzerland */}
        <div>
          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Switzerland</h1>
          </div>
          <p className="text-[rgb(0,83,84)] font-bold">Country</p>
          <img className="mt-2 mb-2" src={line} />
          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Montenegro</h1>
          </div>
          <p className="text-[#005354] font-bold">City</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Montenegro</h1>
          </div>
          <p className="text-[#005354] font-bold">NATIVE LANGUAGE</p>
          <img className="mt-2 mb-2" src={line} />

          <h1 className="font-bold text-[#B19149]">In Person</h1>
          <p className="text-[#005354] font-bold">CONTRACT TYPE</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Montenegro</h1>
          </div>
          <p className="text-[#005354] font-bold">REQUIRED SKILLS</p>
        </div>
        {/* Full-Time */}
        <div>
          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Full-Time</h1>
          </div>
          <p className="text-[rgb(0,83,84)] font-bold">COOPRATION TYPE</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Male</h1>
          </div>
          <p className="text-[#005354] font-bold">GENDER</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">$ 12.00 Hour</h1>
          </div>
          <p className="text-[#005354]  font-bold">MINIMUM SALARY</p>
          <img className="mt-2 mb-2" src={line} />

          <h1 className="font-bold text-[#B19149]">$ 24.00 Hour</h1>
          <p className="text-[#005354] font-bold">MAXIMUM SALARY</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Montenegro</h1>
          </div>
        </div>
        {/* Designer */}
        <div>
          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Designer</h1>
          </div>
          <p className="text-[rgb(0,83,84)] font-bold">CATEGORY</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">24 Months</h1>
          </div>
          <p className="text-[#005354] font-bold">MIN EXPERIENCE</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">8:00 AM GMT +2</h1>
          </div>
          <p className="text-[#005354] font-bold">STARTING HOURS</p>
          <img className="mt-2 mb-2" src={line} />

          <h1 className="font-bold text-[#B19149]">17:00 PM GMT +2</h1>
          <p className="text-[#005354] font-bold">ENDING HOURS</p>
          <img className="mt-2 mb-2" src={line} />

          <div className="inline-flex">
            <img className="mr-2" src={swis} />
            <h1 className="font-bold text-[#B19149]">Montenegro</h1>
          </div>
        </div>
        {/* Know More */}
        <div className="w-full ml-72 flex items-center justify-center">
          <p className="text-xl  text-[#005354] font-normal">KNOW MORE</p>
        </div>
      </div>
    </>
  );
};

export default Resume;
