import motogologo from "../images/motogplogo.webp";
import { useEffect, useState } from "react";
const riderMock = {
  Country: "VE",
  Riders: [
    {
      name: "Carlos Lavado",
      Victories: "19",
      NumberofSecond: "16",
      NumberofThird: "14",
      Numberof4th: "13",
      Numberof5th: "13",
      Numberof6th: "12",
    },
  ],
};

function RiderList() {
  let [riders, setRiders] = useState(riderMock.Riders);
  let [riderListEl, setRiderListEl] = useState(null);

  useEffect(() => {
    setRiderListEl(
      riders.map((rider) => {
        return (
          <div className="w-11/12 p-2 m-4 bg-white border-2 rounded-sm border-grey">
            <ul>
              <li>{rider.name}</li>
              <li>
                <span className="font-bold">Victories</span>: {rider.Victories}
              </li>
              <li>
                <span className="font-bold">2nd Place</span>:{" "}
                {rider.NumberofSecond}
              </li>
              <li>
                <span className="font-bold">3rd Place</span>:{" "}
                {rider.NumberofThird}
              </li>
            </ul>
          </div>
        );
      })
    );
  }, []);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-red-600 min-w-screen">
        <div className="w-11/12 p-2 m-4 bg-white border-2 rounded-sm border-grey">
          <div className="flex items-center justify-between p-2 bg-white">
            <img src={motogologo} alt="motogologo" className="w-1/3" />
            <h2 className="text-2xl font-bold">Result Tracker</h2>
          </div>
        </div>
        <div className="w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
          {" "}
          <div className="flex justify-between">
            <input
              className="m-2 border-2 rounded-sm border-grey"
              type="search"
              placeholder="Search Country Code"
            ></input>
            <button className="h-8 pl-2 pr-2 m-2 bg-white border-2 rounded-sm border-grey">
              Search
            </button>
          </div>
        </div>

        <div className="p-2 m-4 bg-white rounded-sm">
          <span className="font-bold">Country Code</span>:{riderMock.Country}
        </div>
        {riderListEl}
      </div>
    </>
  );
}

export default RiderList;
