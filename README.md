# Student Directory

A full-stack web application for managing student information. View, add, and delete student records with a modern React frontend and Express backend.

---

## Overview

The Student Directory is a simple yet effective student management system with a clean, responsive user interface. It allows administrators to:
- Display all enrolled students with their details
- Add new students to the directory
- Remove students from the system
- View student information (name, age, major, GPA)

---

##  Tech Stack

### Frontend
- **React** 18.2 - UI library
- **Vite** 4.4 - Modern build tool & dev server
- **CSS** - Styled components with CSS variables

### Backend
- **Node.js** - JavaScript runtime
- **Express** 4.18 - Web application framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **UUID** - Unique ID generation for students

### Development Tools
- **Nodemon** - Auto-restart Node server on file changes

---

## Project Structure

```
student-directory/
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── backend/                # Express server
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
└── frontend/               # React + Vite application
    ├── index.html          # HTML entry point
    ├── package.json        # Frontend dependencies
    ├── vite.config.js      # Vite configuration
    └── src/
        ├── main.jsx        # React entry point
        ├── App.jsx         # Main app component
        ├── api.js          # API client functions
        └── components/
            ├── StudentList.jsx      # Display students
            ├── StudentCard.jsx      # Individual student card
            └── AddStudentForm.jsx   # Form to add new students
```

---

##  Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Clone or extract the project**
   ```bash
   cd student-directory
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

---

##  Running the Application

### Option 1: Run Both Servers (Recommended)

**Terminal 1 - Start the backend server:**
```bash
cd backend
npm start        # Production mode
# OR
npm run dev      # Development mode with auto-reload
```
Backend runs on: `http://localhost:3001`

**Terminal 2 - Start the frontend development server:**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

Then open your browser and navigate to: **http://localhost:5173**

### Option 2: Build Frontend for Production

```bash
cd frontend
npm run build      # Creates optimized production build
npm run preview    # Preview the production build
```

---

##  API Endpoints

### Base URL
```
http://localhost:3001/api
```

### Endpoints

#### 1. Get All Students
```
GET /api/students
```
**Response:**
```json
[
  {
    "id": "uuid-string",
    "name": "Alice Sharma",
    "age": 20,
    "major": "Computer Science",
    "gpa": 3.8
  }
]
```

#### 2. Add a New Student
```
POST /api/students
```
**Request Body:**
```json
{
  "name": "John Doe",
  "age": 21,
  "major": "Engineering",
  "gpa": 3.7
}
```
**Response:** Student object with generated `id`

#### 3. Delete a Student  
```
DELETE /api/students/:id
```
**Response:** Confirmation message

---

##  Features

- ✅ View all students in a clean card layout
- ✅ Add new students with form validation
- ✅ Delete students from the directory
- ✅ Real-time UI updates
- ✅ Responsive design
- ✅ Error handling for API issues
- ✅ Loading states for better UX
- ✅ CORS-enabled for cross-origin requests

---

##  Default Student Data

The backend comes pre-loaded with sample students:

| Name | Age | Major | GPA |
|------|-----|-------|-----|
| Alice Sharma | 20 | Computer Science | 3.8 |
| Ben Carter | 22 | Mathematics | 3.5 |
| Priya Nair | 21 | Physics | 3.9 |
| James Liu | 23 | Economics | 3.2 |

---

##  Troubleshooting

### Port Already in Use
If `localhost:3001` or `localhost:5173` is already in use:
- Change the port in `backend/server.js` (search for `PORT = 3001`)
- Vite will automatically use the next available port

### CORS Errors
Make sure:
- Backend is running on `http://localhost:3001`
- Frontend is running on `http://localhost:5173`
- CORS is configured correctly in `backend/server.js`

### Dependencies Issues
```bash
# Clear and reinstall
rm -r node_modules package-lock.json
npm install
```

### Server Not Responding
1. Check if backend is running: `http://localhost:3001/api/students`
2. Check browser console for errors (F12)
3. Check terminal for error messages

---

##  Customization

### Change Backend Port
Edit `backend/server.js`:
```javascript
const PORT = 3001;  // Change this value
```

### Update CORS Settings
Edit `backend/server.js` (cors configuration):
```javascript
cors({
  origin: "http://localhost:5173",  // Update origin if needed
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
})
```

### Modify Student Fields
Edit `backend/server.js` - update the students array structure and validation accordingly.

---

##  Dependencies

### Backend
- `express@^4.18.2` - Web framework
- `cors@^2.8.5` - CORS middleware
- `uuid@^9.0.0` - ID generation
- `nodemon@^3.0.1` - Dev tool for auto-restart

### Frontend
- `react@^18.2.0` - UI library
- `react-dom@^18.2.0` - React DOM binding
- `vite@^4.4.0` - Build tool
- `@vitejs/plugin-react@^4.0.0` - React plugin for Vite

---

##  License

This project is provided as-is for educational purposes.

---

##  Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication
- Edit existing student records
- Search/filter functionality
- Export student data to CSV
- Pagination for large datasets
- Student profile pages
- Admin dashboard

---

##  Support

For issues or questions, check the troubleshooting section above or review the code comments in the source files.

