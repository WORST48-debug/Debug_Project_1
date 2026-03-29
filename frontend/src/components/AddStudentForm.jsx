import React, { useState } from "react";
import { addStudent } from "../api.js";

const formStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius)",
  padding: "32px",
  marginBottom: "36px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 12,
  color: "var(--muted)",
  letterSpacing: 1,
  textTransform: "uppercase",
};

const inputStyle = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: 8,
  padding: "10px 14px",
  color: "var(--text)",
  fontSize: 15,
  fontFamily: "'DM Sans', sans-serif",
  outline: "none",
};

export default function AddStudentForm({ onStudentAdded, onCancel }) {
  const [form, setForm] = useState({ name: "", age: "", major: "", gpa: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const result = await addStudent(form);
      onStudentAdded(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 16,
          color: "var(--accent)",
        }}
      >
        New Enrollment
      </p>
      <div style={formStyle}>
        {["name", "age", "major", "gpa"].map((field) => (
          <label key={field} style={labelStyle}>
            {field}
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              style={inputStyle}
              placeholder={
                field === "age" ? "e.g. 21" : field === "gpa" ? "e.g. 3.7" : ""
              }
            />
          </label>
        ))}
      </div>
      {error && (
        <p style={{ color: "var(--accent2)", fontSize: 13, marginBottom: 12 }}>
          {error}
        </p>
      )}
      <button
        onClick={handleSubmit}
        disabled={submitting}
        style={{
          background: "var(--accent)",
          color: "#000",
          border: "none",
          padding: "12px 28px",
          borderRadius: "var(--radius)",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 14,
          cursor: submitting ? "not-allowed" : "pointer",
          opacity: submitting ? 0.6 : 1,
        }}
      >
        {submitting ? "Enrolling..." : "Enroll Student"}
      </button>
    </div>
  );
}
