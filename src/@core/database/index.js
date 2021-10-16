const mongoClient = require('mongodb').MongoClient;

export default function db() {
  return {
    connect: async () => {
      await mongoClient.connect(process.env.DB_MONGO_URL);
    },
  };
}
