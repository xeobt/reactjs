import StudentList from "./StudentList"

function App() {
  const students = ["Rahim", "Karim", "Jamal"];

  return (
    <div>
      <StudentList students={students} />
    </div>
  )
}

export default App