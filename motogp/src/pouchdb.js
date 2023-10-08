import PouchDB from "pouchdb";

const db = new PouchDB("local_motogp");
const remoteDB = new PouchDB("http://admin1:admin1@127.0.0.1:5984/motogp");

// Sync localDB with remoteDB once without live synchronization and retry
db.sync(remoteDB)
  .on("complete", (info) => {
    // Handle complete
    console.log("Sync Complete:", info);
  })
  .on("error", (err) => {
    // Handle error
    console.error("Sync Error:", err);
  });

export default db;
