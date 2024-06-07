const { MongoClient } = require('mongodb');

// MongoDB connection string
const uri = 'mongodb://<databse>-cta2k.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin';

// Connect to MongoDB Atlas cluster
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB Atlas');
    const db = client.db('sample_mflix');

    // Perform database operations here

    // Close the connection when done
    client.close();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
