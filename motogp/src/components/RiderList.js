import motogologo from "../images/motogplogo.webp";
import { useEffect, useState } from "react";
const riderMock = {Country: "VE",
  Riders: [
    {
      name: "Carlos Lavado",
      Victories: "19",
      NumberofSecond: "16",
      NumberofThird: "14",
      Numberof4th: "13",
      Numberof5th: "13",
      Numberof6th: "12"
    }
]
}

function RiderList(){

    let [riders, setRiders] = useState(riderMock.Riders);
    let [riderListEl, setRiderListEl] = useState(null);

    useEffect(()=>{

        setRiderListEl(riders.map((rider)=>{
            return (
            <div className="w-11/12 bg-white rounded-sm p-2 m-4 border-2 border-grey">
                <ul>
                    <li>{rider.name}</li>
                    <li><span className="font-bold">Victories</span>: {rider.Victories}</li>
                    <li><span className="font-bold">2nd Place</span>: {rider.NumberofSecond}</li>
                    <li><span className="font-bold">3rd Place</span>: {rider.NumberofThird}</li>
                </ul>
            </div>)
        }))
     
    }, []);

    return(
        <><div className="min-w-screen min-h-screen flex flex-col items-center bg-red-600">
        <div className="bg-white p-2 flex justify-between items-center">
          <img src={motogologo} alt="motogologo" className="w-1/3" />
          <h2 className="text-2xl font-bold">Result Tracker</h2>
        </div>
        <div className="flex">

            <input className="rounded-sm m-4 border-2 border-grey" type="search" placeholder="Search Country Code"></input>
            <button className="bg-white rounded-sm h-8 m-4 pl-2 pr-2 border-2 border-grey">Search</button>
        </div>
        <div className="bg-white rounded-sm p-2 m-4"> 
        <span className="font-bold">Country Code</span>:{riderMock.Country}
        </div>
        {riderListEl}
        </div></>
    )
}

export default RiderList;