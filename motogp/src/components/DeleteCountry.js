import { useState } from "react";
import motogologo from "../images/motogplogo.webp";
import db from "../pouchdb";

function DeleteCountry() {
  const [countryCode, setCountryCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const deleteCountry = async () => {
    if (!countryCode) {
      setFeedbackMessage("Please enter a country code.");
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
        await db.remove(result.docs[0]._id, result.docs[0]._rev);
        setFeedbackMessage("Country deleted successfully!");
        setCountryCode("");
      }
    } catch (err) {
      console.error("Error deleting country data:", err);
      setFeedbackMessage("Failed to delete country. Please try again.");
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
          <h2 className="text-2xl font-bold">Remove Country</h2>
        </div>
      </div>
      <div className="flex justify-between w-11/12 m-4 bg-white border-2 rounded-sm border-grey">
        <input
          id="countryCode"
          className="m-2 border-2 rounded-sm border-grey"
          type="search"
          placeholder="Enter Country Code"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          aria-label="Country Code"
        />
        <button
          onClick={deleteCountry}
          className="h-8 pl-2 pr-2 m-2 bg-white border-2 rounded-sm border-grey"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Deleting..." : "Delete"}
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

export default DeleteCountry;
