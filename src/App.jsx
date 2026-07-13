function App() {
  const students = ["Rahim", "Karim", "Jamal", "Sakib", "Basan", "Rafil", "ghgdd"];

  const showStudent = ["Rahim","Basan"]

  return (
    <div>
      {students.filter((student) => showStudent.includes(student))
      .map((student, index) => (
      <h2 key={index}>{student}</h2>
      ))}
    </div>
  )
}

export default App