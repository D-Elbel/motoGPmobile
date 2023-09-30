import { BsFillPersonFill } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";
import { FaFlag } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import motogologo from "../images/motogplogo.webp";
function LandingScreen() {
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col items-center bg-red-600">
        <div className="bg-white p-2 flex justify-between items-center">
          <img src={motogologo} alt="motogologo" className="w-1/3" />
          <h2 className="text-2xl font-bold">Result Tracker</h2>
        </div>

        <button className="w-11/12 m-2 border-2 rounded-md p-2 text-xl bg-white flex justify-between">
          View Riders
          <BsFillPersonFill size={26} />
        </button>
        <button className="w-11/12 m-2 border-2 rounded-md p-2 text-xl bg-white flex justify-between">
          Update Results
          <AiFillFileAdd size={26} />
        </button>
        <button className="w-11/12 m-2 border-2 rounded-md p-2 text-xl bg-white flex justify-between">
          Add Rider
          <FaMotorcycle size={26} />
        </button>
        <button className="w-11/12 m-2 border-2 rounded-md p-2 text-xl bg-white flex justify-between">
          Remove Country
          <FaFlag size={26} />
        </button>
      </div>
    </>
  );
}

export default LandingScreen;
