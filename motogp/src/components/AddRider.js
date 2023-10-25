import { useState } from "react";
import motogologo from "../images/motogplogo.webp";
import db from "../pouchdb";

function AddRider() {
  const [countryCode, setCountryCode] = useState("");
  const [riderName, setRiderName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const addRider = async () => {
    if (!countryCode || !riderName) {
      setFeedbackMessage("Please enter both country code and rider name.");
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      const result = await db.find({
        selector: { Country: countryCode },
      });

      if (result.docs.length === 0) {
        setFeedbackMessage("Country not found.");
      } else {
        const countryDoc = result.docs[0];

        if (countryDoc.Riders.some((rider) => rider.name === riderName)) {
          setFeedbackMessage("Rider already exists in this country.");
          return;
        }

        const newRider = { name: riderName };
        countryDoc.Riders.push(newRider);

        await db.put(countryDoc);

        setFeedbackMessage("Rider added successfully!");
        setCountryCode("");
        setRiderName("");
      }
    } catch (err) {
      console.error("Error adding rider:", err);
      setFeedbackMessage("Failed to add rider. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-red-600 min-w-screen">
      <div className="w-11/12 p-2 m-4 bg-white border-2 rounded-sm border-grey">
        <div className="flex items-center justify-between p-2 bg-white">
          <a href="/">
            <img src={motogologo} alt="MotoGP Logo" className="w-1/3" />
          </a>

          <h2 className="text-2xl font-bold">Add Rider</h2>
        </div>
      </div>
      <div className="flex flex-col w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
        <div className="flex w-full">
          <input
            id="countryCode"
            className="w-1/2 m-2 border-2 rounded-sm border-grey"
            type="text"
            placeholder="Enter Country Code"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            aria-label="Country Code"
          />
          <input
            id="riderName"
            className="w-1/2 m-2 border-2 rounded-sm border-grey"
            type="text"
            placeholder="Enter Rider Name"
            value={riderName}
            onChange={(e) => setRiderName(e.target.value)}
            aria-label="Rider Name"
          />
        </div>

        <button
          onClick={addRider}
          className="h-8 pl-2 pr-2 m-2 bg-white border-2 rounded-sm border-grey"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>
      {feedbackMessage && (
        <div className="w-11/12 p-2 m-4 text-center bg-white border-2 rounded-sm border-grey">
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}

export default AddRider;
