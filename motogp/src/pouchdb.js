import PouchDB from "pouchdb";
import PouchDBfind from "pouchdb-find";
PouchDB.plugin(PouchDBfind);

const db = new PouchDB("local_motogp");
const remoteDB = new PouchDB("http://admin1:admin1@127.0.0.1:5984/motogp");

db.sync(remoteDB)
  .on("complete", (info) => {
    console.log("Sync Complete:", info);
  })
  .on("error", (err) => {
    console.error("Sync Error:", err);
  });

export default db;
