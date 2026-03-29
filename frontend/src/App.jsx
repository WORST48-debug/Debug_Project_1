
import React, { useEffect, useState } from "react";
import StudentList from "./components/StudentList.jsx";
import AddStudentForm from "./components/AddStudentForm.jsx";
import { fetchStudents } from "./api.js";

const headerStyle = {
  padding: "48px 64px 0",
  borderBottom: "1px solid var(--border)",
  marginBottom: "40px",
  paddingBottom: "28px",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
};

const titleStyle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2rem, 4vw, 3.2rem)",
  fontWeight: 800,
  letterSpacing: "-1px",
  lineHeight: 1,
};

const accentDot = {
  display: "inline-block",
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "var(--accent)",
  marginLeft: 6,
  marginBottom: 6,
};

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchStudents()
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleStudentAdded = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowForm(false);
  };

  const handleStudentDeleted = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <header style={headerStyle}>
        <div>
          <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 8, letterSpacing: 2, textTransform: "uppercase" }}>
            Academic Registry
          </p>
          <h1 style={titleStyle}>
            Student Directory
            <span style={accentDot} />
          </h1>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          style={{
            background: showForm ? "transparent" : "var(--accent)",
            color: showForm ? "var(--muted)" : "#000",
            border: showForm ? "1px solid var(--border)" : "none",
            padding: "12px 24px",
            borderRadius: "var(--radius)",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: 0.5,
          }}
        >
          {showForm ? "Cancel" : "+ Add Student"}
        </button>
      </header>

      <main style={{ padding: "0 64px 64px" }}>
        {showForm && (
          <AddStudentForm
            onStudentAdded={handleStudentAdded}
            onCancel={() => setShowForm(false)}
          />
        )}

        {loading && (
          <p style={{ color: "var(--muted)", textAlign: "center", paddingTop: 80 }}>
            Loading students...
          </p>
        )}
        {error && (
          <p style={{ color: "var(--accent2)", textAlign: "center", paddingTop: 80 }}>
            Error: {error}
          </p>
        )}
        {!loading && !error && (
          <StudentList
            students={students}
            onDelete={handleStudentDeleted}
          />
        )}
      </main>
    </div>
  );
}
