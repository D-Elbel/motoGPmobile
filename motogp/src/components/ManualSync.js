import React, { useEffect, useState } from "react";
import db from "../pouchdb"; // Import your PouchDB instance

const ManualSync = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.allDocs({ include_docs: true });
        setData(result.rows.map((row) => row.doc));
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  console.log("test");
  return (
    <>
      <div className="p-1 overflow-auto">
        {error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <h2>All Documents</h2>
            {data.length > 0 ? (
              <ul>
                {data.map((item) => (
                  <li key={item._id}>{JSON.stringify(item)}</li>
                ))}
              </ul>
            ) : (
              <p>No documents found</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ManualSync;
