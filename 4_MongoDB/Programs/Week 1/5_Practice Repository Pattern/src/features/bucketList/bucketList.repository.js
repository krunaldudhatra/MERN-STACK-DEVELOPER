// Please don't change the pre-written code
// Import the necessary modules here
import {getDB} from "../../config/mongodb.js"
class BucketListRepository {
  constructor() {
    this.collection = "bucketListItems";
  }
  async addBucketListItem(bucketListItem) {
    // Write your code here
    try{
      // 1. Get the database
    const db = getDB();
    // 2. Get the collection
    const collection = db.collection("bucketListItems");
    
    // 3. Insert the document.
    await collection.insertOne(bucketListItem);
    return bucketListItem;
    } catch(err){
      console.log(err);
    }
  }

  async findOneBucketListItem(title) {
    // Write your code here
    const db = getDB();
    // 2. Get the collection
    const collection = db.collection("bucketListItems");
    
    // 3. Find the document.
    return await collection.findOne({title});
    } catch(err){
      console.log(err);
    }
  
}

export default BucketListRepository;
