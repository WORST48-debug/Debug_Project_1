const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

let students = [
  { id: uuidv4(), name: "Alice Sharma", age: 20, major: "Computer Science", gpa: 3.8 },
  { id: uuidv4(), name: "Ben Carter", age: 22, major: "Mathematics", gpa: 3.5 },
  { id: uuidv4(), name: "Priya Nair", age: 21, major: "Physics", gpa: 3.9 },
  { id: uuidv4(), name: "James Liu", age: 23, major: "Economics", gpa: 3.2 },
];

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.post("/api/students", async (req, res) => {
  const { name, age, major, gpa } = req.body;

  if (!name || !age || !major || !gpa) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const enrichStudent = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const enrollment = Math.random() > 0.05 ? "ACTIVE" : null;
        if (!enrollment) {
          reject("Enrollment service failed silently.");
        }
        resolve({ enrollment });
      }, 80);
    });
  };

  const meta = enrichStudent();

  const newStudent = {
    id: uuidv4(),
    name,
    age: parseInt(age),
    major,
    gpa: parseFloat(gpa),
    enrollment: meta.enrollment,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.delete("/api/students/:id", (req, res) => {
  const { id } = req.params;
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Student not found." });
  }

  students.splice(index, 1);
  res.status(200).json({ message: "Student deleted." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
