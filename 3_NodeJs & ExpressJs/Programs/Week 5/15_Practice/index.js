import express from "express";
import cors from "cors";

const app = express();

// Enable CORS to allow cross-origin requests
app.use(cors());

// Define an endpoint that returns employee data
app.get("/api/v1/emp", (req, res) => {
  const employees = [
    { emp_id: 1, name: "John Doe", company: "TechCorp" },
    { emp_id: 2, name: "Jane Smith", company: "DesignCo" },
    { emp_id: 3, name: "Emily Davis", company: "FinServe" },
  ];

  // Respond with a JSON array of employees
  res.json(employees);
});

export default app;
