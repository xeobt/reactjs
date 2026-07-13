function StudentList({students}){
    return (
        <div>
            {students.map((student, index) => (
                <h2 key={index}>{student}</h2>
            ))}
        </div>
    )
}

export default StudentList;