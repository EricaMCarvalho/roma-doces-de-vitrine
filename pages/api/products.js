// GET /api/products
// POST /api/products

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(
      'mongodb+srv://erica:uVa2B3ouZeKI8Hg9@cluster0.tjvxh.mongodb.net/roma?retryWrites=true&w=majority'
    );

    const db = client.db();
    const result = await db.collection('products').find({}).toArray();

    client.close();

    return res.status(200).json({ success: true, data: result });
  }
};

export default handler;
