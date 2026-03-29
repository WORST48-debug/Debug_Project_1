import React from "react";
import StudentCard from "./StudentCard.jsx";

export default function StudentList({ students, onDelete }) {
  if (students.length === 0) {
    return (
      <div style={{ textAlign: "center", paddingTop: 80, color: "var(--muted)" }}>
        <p style={{ fontSize: 48, marginBottom: 12 }}>📭</p>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 20 }}>No students enrolled yet.</p>
      </div>
    );
  }

  return (
    <div>
      <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 20 }}>
        {students.length} student{students.length !== 1 ? "s" : ""} enrolled
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {students.map((student) => (
          <StudentCard key={student.id} student={student} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}
