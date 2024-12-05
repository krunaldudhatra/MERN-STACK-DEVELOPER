// Please don't change the pre-written code
// Import the necessary modules here

import { ObjectId } from "mongodb";
import { getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:
  // Start Writing your code
  async createIndexes() {
    try {
      const db = getDB();
      const collection = db.collection(collectionName);

      // Single-field index on 'name' in ascending order
      await collection.createIndex({ name: 1 });

      // Compound index on 'age' (ascending) and 'grade' (descending)
      await collection.createIndex({ age: 1, grade: -1 });

      console.log("Indexes created successfully.");
    } catch (error) {
      console.error("Error creating indexes:", error);
    }
  }

  async getStudentsWithAverageScore() {
    try {
      const db = getDB();
      const collection = db.collection(collectionName);

      const students = await collection.aggregate([
        {
          $project: {
            name: 1, // Include student's name
            averageScore: { $avg: "$assignments.score" } // Calculate average score
          }
        }
      ]).toArray();

      return students;
    } catch (error) {
      console.error("Error fetching students with average scores:", error);
      throw error;
    }
  }

  async getQualifiedStudentsCount() {
    try {
      const db = getDB();
      const collection = db.collection(collectionName);

      const count = await collection.countDocuments({
        age: { $gt: 9 }, // Age > 9
        grade: { $lte: "B" }, // Grade <= 'B'
        assignments: {
          $elemMatch: {
            title: "Math", // Assignment titled 'Math'
            score: { $gte: 60 } // Score >= 60
          }
        }
      });

      return count;
    } catch (error) {
      console.error("Error counting qualified students:", error);
      throw error;
    }
  }

  async updateStudentGrade(studentId, assignmentTitle, newScore) {
    try {
      const db = getDB();
      const collection = db.collection(collectionName);

      const session = client.startSession(); // Start a session for atomic operations

      const gradeScale = [
        { grade: "A", minScore: 90 },
        { grade: "B", minScore: 80 },
        { grade: "C", minScore: 70 },
        { grade: "D", minScore: 60 },
        { grade: "F", minScore: 0 }
      ];

      await session.withTransaction(async () => {
        // Step 1: Update the assignment score
        await collection.updateOne(
          { _id: new ObjectId(studentId), "assignments.title": assignmentTitle },
          { $set: { "assignments.$.score": newScore } },
          { session }
        );

        // Step 2: Recalculate average score
        const student = await collection.findOne(
          { _id: new ObjectId(studentId) },
          { session }
        );

        const averageScore =
          student.assignments.reduce((acc, a) => acc + a.score, 0) /
          student.assignments.length;

        // Step 3: Update the student's grade based on the average score
        const newGrade = gradeScale.find((g) => averageScore >= g.minScore).grade;

        await collection.updateOne(
          { _id: new ObjectId(studentId) },
          { $set: { grade: newGrade } },
          { session }
        );
      });

      session.endSession();
      console.log("Student grade updated successfully.");
    } catch (error) {
      console.error("Error updating student grade:", error);
      throw error;
    }
  }
}

export default studentRepository;
