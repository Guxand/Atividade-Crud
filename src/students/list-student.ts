import listStudents from "../dataBase";

function findById(id: string) {
    const studentFind = listStudents.find((student) => student.id === id)
    if (!studentFind) {
        console.log("Nenhum aluno encontrato pelo ID informado!");
        return
    }
    console.log(studentFind)
}

export default findById