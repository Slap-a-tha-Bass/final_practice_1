import { Query } from '..';

const get_categories = () => Query('SELECT * FROM Categories');
const get_one_category = (id: number) => Query('SELECT * FROM Categories WHERE id=?', [id]);

export default {
    get_categories,
    get_one_category
}