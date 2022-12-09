import { MongoClient } from "mongodb";

const Handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://vegad:<password>@atlascluster.nmnca1n.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
    const meetupCollection = db.collection("meetup");

    const result = await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message:'meetup inserted'})
  }
};

export default Handler;
