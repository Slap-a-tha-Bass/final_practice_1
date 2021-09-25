export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Users {
    id: number,
    name: string,
    email: string,
    password: string,
    role: string,
    _created: Date
}