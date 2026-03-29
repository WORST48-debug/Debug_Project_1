import React, { useState } from "react";
import { deleteStudent } from "../api.js";

const gpaColor = (gpa) => {
  if (gpa >= 3.7) return "#6ee7a0";
  if (gpa >= 3.0) return "#f0c040";
  return "#e05a5a";
};

export default function StudentCard({ student, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteStudent(student.id);
      onDelete(student.id);
    } catch (err) {
      console.error(err);
      setDeleting(false);
    }
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        padding: "24px",
        position: "relative",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div>
          <p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              marginBottom: 2,
            }}
          >
            {student.name}
          </p>
          <p style={{ color: "var(--muted)", fontSize: 13 }}>{student.major}</p>
        </div>
        <span
          style={{
            background: gpaColor(student.gpa) + "22",
            color: gpaColor(student.gpa),
            border: `1px solid ${gpaColor(student.gpa)}44`,
            borderRadius: 6,
            padding: "4px 10px",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "'Syne', sans-serif",
          }}
        >
          GPA {student.gpa}
        </span>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 20 }}>
        <span
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: 6,
            padding: "3px 10px",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          Age {student.age}
        </span>
        {student.enrollment && (
          <span
            style={{
              background: "#6ee7a022",
              color: "#6ee7a0",
              border: "1px solid #6ee7a044",
              borderRadius: 6,
              padding: "3px 10px",
              fontSize: 12,
            }}
          >
            {student.enrollment}
          </span>
        )}
      </div>

      <button
        onClick={handleDelete}
        disabled={deleting}
        style={{
          background: "transparent",
          border: "1px solid var(--border)",
          color: "var(--accent2)",
          borderRadius: 8,
          padding: "7px 14px",
          fontSize: 12,
          cursor: deleting ? "not-allowed" : "pointer",
          opacity: deleting ? 0.5 : 1,
          fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#e05a5a22";
          e.currentTarget.style.borderColor = "var(--accent2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        {deleting ? "Removing..." : "Remove"}
      </button>
    </div>
  );
}
