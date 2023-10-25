import motogologo from "../images/motogplogo.webp";
import { useEffect, useState } from "react";
import db from "../pouchdb";

function RiderList() {
  let [riderListEl, setRiderListEl] = useState(null);
  let [searchCountry, setSearchCountry] = useState(null);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (searchCountry) => {
      try {
        await db.createIndex({
          index: { fields: ["Country"] },
        });

        const result = await db.find({
          selector: {
            Country: searchCountry,
          },
        });

        setData(result.docs);
        console.log("Data:", result.docs);
      } catch (err) {
        console.error("Error finding documents by country:", err);
        return [];
      }
    };

    fetchData(searchCountry);
  }, [searchCountry]);

  useEffect(() => {
    if (data.length == 0) return;

    console.log(data[0].Riders);
    setRiderListEl(
      data[0].Riders.map((rider) => {
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
  }, [data]);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-red-600 min-w-screen">
        <div className="w-11/12 p-2 m-4 bg-white border-2 rounded-sm border-grey">
          <div className="flex items-center justify-between p-2 bg-white">
            <a href="/">
              <img src={motogologo} alt="MotoGP Logo" className="w-1/3" />
            </a>
            <h2 className="text-2xl font-bold">Find Riders</h2>
          </div>
        </div>
        <div className="w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
          {" "}
          <div className="flex justify-between">
            <input
              id="searchCountry"
              className="m-2 border-2 rounded-sm border-grey"
              type="search"
              placeholder="Search Country Code"
            ></input>
            <button
              onClick={() => {
                setSearchCountry(
                  document.getElementById("searchCountry").value
                );
              }}
              className="h-8 pl-2 pr-2 m-2 bg-white border-2 rounded-sm border-grey"
            >
              Search
            </button>
          </div>
        </div>
        {data.length != 0 ? (
          <>
            <div className="flex justify-between w-11/12 p-2 m-4 bg-white rounded-sm">
              <span className="font-bold">Country Code: {searchCountry}</span>
              <span className="font-bold">
                Riders Found: {data[0].Riders.length}
              </span>
            </div>
          </>
        ) : null}

        {riderListEl}
      </div>
    </>
  );
}

export default RiderList;
