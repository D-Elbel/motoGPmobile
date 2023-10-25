import motogologo from "../images/motogplogo.webp";
import { useEffect, useState } from "react";

import db from "../pouchdb";

function AddCountry() {
  const [newCountryData, setNewCountryData] = useState(null);

  useEffect(() => {
    const postNew = async (newCountryData) => {
      console.log("newCountryData:", newCountryData);
      const countryData = {
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
            <a href="/">
              <img src={motogologo} alt="MotoGP Logo" className="w-1/3" />
            </a>
            <h2 className="text-2xl font-bold">Add Country</h2>
          </div>
        </div>
        <div className="flex justify-between w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
          <input
            id="newCountryCode"
            className="m-2 border-2 rounded-sm border-grey"
            type="search"
            placeholder="Search Country Code"
          ></input>
          <button
            onClick={() => {
              setNewCountryData(
                document.getElementById("newCountryCode").value
              );
            }}
            className="h-8 pl-2 pr-2 m-2 bg-white border-2 rounded-sm border-grey"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddCountry;
