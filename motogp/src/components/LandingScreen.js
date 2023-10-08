import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { FaFlag } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import motogologo from "../images/motogplogo.webp";
import ManualSync from "./ManualSync";
function LandingScreen() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-red-600 min-w-screen">
        <div className="flex items-center justify-between p-2 bg-white">
          <img src={motogologo} alt="motogologo" className="w-1/3" />
          <h2 className="text-2xl font-bold">Result Tracker</h2>
        </div>

        <button
          className="flex justify-between w-11/12 p-2 m-2 text-xl bg-white border-2 rounded-md"
          onClick={() => {
            window.location.replace("http://localhost:3000/riderlist");
          }}
        >
          View Riders By Country
          <BsFillPersonFill size={26} />
        </button>
        <button className="flex justify-between w-11/12 p-2 m-2 text-xl bg-white border-2 rounded-md">
          Update Results
          <AiFillFileAdd size={26} />
        </button>
        <button className="flex justify-between w-11/12 p-2 m-2 text-xl bg-white border-2 rounded-md">
          Add Rider
          <FaMotorcycle size={26} />
        </button>
        <button className="flex justify-between w-11/12 p-2 m-2 text-xl bg-white border-2 rounded-md">
          Remove Country
          <FaFlag size={26} />
        </button>
        <div className="overflow-scroll bg-white">
          <ManualSync></ManualSync>
        </div>
      </div>
    </>
  );
}

export default LandingScreen;
