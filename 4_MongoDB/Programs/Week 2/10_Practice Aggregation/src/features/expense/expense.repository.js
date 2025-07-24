import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  // Create a new expense
  async addExpense(expense) {
    const db = getDB();
    await db.collection(this.collectionName).insertOne(expense);
    return expense;
  }

  // Get one expnese by its ID
  async getOne(id) {
    const db = getDB();
    const expense = await db
      .collection(this.collectionName)
      .findOne({ _id: new ObjectId(id) });
    return expense;
  }

  // Get all expenses
  async getAllExpenses() {
    const db = getDB();
    const expenses = await db.collection(this.collectionName).find().toArray();
    return expenses;
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    const db = getDB();
    const result = await db
      .collection(this.collectionName)
      .updateOne({ _id: new ObjectId(id) }, { $push: { tags: tag } });
    return result;
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    const db = getDB();
    let query = {};

    if (criteria.minAmount || criteria.maxAmount) {
      query.amount = {};

      if (criteria.minAmount) {
        query.amount.$gte = parseFloat(criteria.minAmount);
      }

      if (criteria.maxAmount) {
        query.amount.$lte = parseFloat(criteria.maxAmount);
      }
    }

    if (criteria.isRecurring !== undefined) {
      query.isRecurring = criteria.isRecurring === "true";
    }

    const expenses = await db
      .collection(this.collectionName)
      .find(query)
      .toArray();
    return expenses;
  }

  // Update a tag in an expense
  async updateTagInExpense(id, oldTag, newTag) {
    const db = getDB();
    const filter = { _id: new ObjectId(id), tags: oldTag };
    const update = { $set: { "tags.$": newTag } };
    const expenses = await db
      .collection(this.collectionName)
      .updateOne(filter, update);
    return expenses;
  }

  // Delete a tag from an expense
  async deleteTagFromExpense(id, tag) {
    const db = getDB();
    const filter = { _id: new ObjectId(id) };
    const update = { $pull: { tags: tag } };
    await db.collection(this.collectionName).updateOne(filter, update);
  }

  // -----------Above is default code-------------

  // Only change the below functions

  // Aggregate total revenue for each product
  async aggregateTotalRevenue() {
    const db = getDB();
    const result = await db.collection(this.collectionName).aggregate([
      {
        $group: {
          _id: "$title", // Group by title
          totalRevenue: { $sum: "$amount" } // Calculate total revenue
        }
      },
      {
        $project: {
          _id: 0,
          title: "$_id", // Rename _id to title for clarity
          totalRevenue: 1
        }
      }
    ]).toArray();
    return result;
  }

  // Group expenses by tags
  async groupExpensesByTags() {
    const db = getDB();
  const result = await db.collection(this.collectionName).aggregate([
    { $unwind: "$tags" }, // Break down arrays of tags
    {
      $group: {
        _id: "$tags", // Group by each unique tag
        expenses: { $push: "$$ROOT" } // Collect all expenses under each tag
      }
    },
    {
      $project: {
        _id: 0,
        tag: "$_id", // Rename _id to tag for clarity
        expenses: 1
      }
    }
  ]).toArray();
  return result;
  }

  // Group and calculate average by recurring status
  async groupAndCalculateAvgByRecurring() {
    const db = getDB();
  const result = await db.collection(this.collectionName).aggregate([
    {
      $group: {
        _id: "$isRecurring", // Group by recurring status
        avgAmount: { $avg: "$amount" } // Calculate average amount
      }
    },
    {
      $project: {
        _id: 0,
        isRecurring: "$_id", // Rename _id to isRecurring for clarity
        avgAmount: 1
      }
    }
  ]).toArray();
  return result;
  }
}

export default ExpenseRepository;
