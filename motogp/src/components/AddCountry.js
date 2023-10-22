import motogologo from "../images/motogplogo.webp";
import { useEffect, useState } from "react";

import db from "../pouchdb";

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

function AddCountry() {
  let [riders, setRiders] = useState(riderMock.Riders);
  let [riderListEl, setRiderListEl] = useState(null);
  let [searchCountry, setSearchCountry] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [newCountryData, setNewCountryData] = useState(null);

  useEffect(() => {
    const postNew = async (newCountryData) => {
      console.log("newCountryData:", newCountryData);
      const countryData = {
        // Assumes country code as unique ID
        Country: newCountryData,
        Riders: [],
      };

      try {
        await db.post(countryData);
        console.log("Country data saved successfully");
      } catch (err) {
        console.error("Error saving country data:", err);
      }
    };

    if (newCountryData == null) return;
    postNew(newCountryData);
  }, [newCountryData]);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-red-600 min-w-screen">
        <div className="w-11/12 p-2 m-4 bg-white border-2 rounded-sm border-grey">
          <div className="flex items-center justify-between p-2 bg-white">
            <img src={motogologo} alt="motogologo" className="w-1/3" />
            <h2 className="text-2xl font-bold">Result Tracker</h2>
          </div>
        </div>
        <div className="flex w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
          <div>
            <label>Country Code</label>
            <input type="text" id="newCountryCode"></input>
          </div>
          <button
            className="text-white bg-black "
            onClick={() =>
              setNewCountryData(document.getElementById("newCountryCode").value)
            }
          >
            Add Country
          </button>
        </div>
      </div>
    </>
  );
}

export default AddCountry;
