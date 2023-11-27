import halloween from "../assets/hallowen.png";
import dots from "../assets/dots.png";
import innerline from "../assets/innerline.png";
import Resume from "./Resume";
const InfoBox = () => {
  return (
    <div>
      <div className=" bg-[rgb(222,235,236)] p-2 rounded-lg shadow-lg">
        <div className="items-center mb-4">
          <div className="flex flex-col items-start">
            <div className="flex w-full">
              <img src={halloween} className="mr-2" />
              <label className="block text-[#B19149] text-base font-bold">
                KAYLAY GUNER
              </label>
              <img className="h-4 w-4 ml-auto" src={dots} />
            </div>
            <div className="ml-[56px] -mt-8">
              <img src={innerline} />
              <p className="text-[#005354] font-normal text-sm">
                PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY
              </p>
            </div>
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default InfoBox;
