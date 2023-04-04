interface Student {
    id: string;
    name: string;
    cpf: string;
    register: string;
}
type UpdateStudent = Omit<Partial<Student>, "id" | "register">
export { Student, UpdateStudent };