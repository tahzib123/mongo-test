const express = require("express");
const { MongoClient } = require("mongodb");
var url = "mongodb://localhost:27017/mydb";

const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const run = async () =>  {
    try {
      // Connect the client to the server
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }

  run();