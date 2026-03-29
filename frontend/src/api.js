const BASE_URL = "http://localhost:3001";

export async function fetchStudents() {
  const res = await fetch(`${BASE_URL}/api/students`);
  if (!res.ok) throw new Error("Failed to fetch students");
  return res.json();
}

export async function addStudent(studentData) {
  const res = await fetch(`${BASE_URL}/api/students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  if (!res.ok) throw new Error("Failed to add student");
  return res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${BASE_URL}/api/students/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete student");
  return res.json();
}
