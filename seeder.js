const { MongoClient } = require('mongodb');
const products = require('./data/products');

const seedDB = async () => {
  try {
    const client = await MongoClient.connect(
      'mongodb+srv://erica:uVa2B3ouZeKI8Hg9@cluster0.tjvxh.mongodb.net/roma?retryWrites=true&w=majority'
    );

    db = client.db();

    for (let product of products) {
      await db.collection('products').insertOne(product);
    }

    client.close();

    console.log('Inserted');
  } catch (error) {
    console.log(error);
  }
};

seedDB();
