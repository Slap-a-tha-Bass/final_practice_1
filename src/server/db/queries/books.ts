import { Query } from '..';
import { Books } from '../../../../types';

const get_all_books = () => Query<Books[]>('SELECT * FROM Books');
const get_one_book = (id: number) => Query<Books[]>('SELECT * FROM Books WHERE id=?', [id]);
const post_book = (newBookObject: { title: string, author: string, price: number, categoryid: number }, id: number) => Query('INSERT INTO Books Set ?', [newBookObject, id]);
const edit_book = (updatedBook: { title: string, author: string, price: number, categoryid: number }, id: number) => Query('UPDATE Books Set ? WHERE  id=?', [updatedBook, id]);
const delete_book = (id: number) => Query('DELETE FROM Books WHERE id=?', [id]);

export default {
    get_all_books,
    get_one_book,
    post_book,
    edit_book,
    delete_book
}