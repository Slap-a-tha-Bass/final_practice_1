import { Query } from "..";
import { mySQL_Response, Users } from "../../../../types";

const get_users = () => Query('SELECT * FROM Users');

const find = (column: string, value: string) => Query<Users[]>('SELECT * FROM Users WHERE ?? = ? ', [column, value])
const insert = (newUser: {email: string, password: string, role: string, name: string}) => Query('INSERT INTO Users SET ?', [newUser]);

export default {
    get_users,
    find,
    insert
}