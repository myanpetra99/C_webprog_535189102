const MongoDB = require("mongodb").MongoClient,
    dbURL = "mongodb://127.0.0.1:27017",
    dbName = "db-untar-cafe";

MongoDB.connect(dbURL, (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("untar-cafe")
        .insertOne({
            menu: "Earl Grey",
            description: "Tea. Earl Grey. Hot.",
            price: 18000,
            isavailable: true
        }, (error, db) => {
            if (error) throw error;
            console.log(db);
        })
});

