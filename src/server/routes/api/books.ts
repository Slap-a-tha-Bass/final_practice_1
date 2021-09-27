import * as express from 'express';
import db_books from '../../db/queries/books';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await db_books.get_all_books();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all books', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [book] = await db_books.get_one_book(Number(id));
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching one book', error: error.message });
    }
});
router.post('/', async (req, res) => {
    let id = 0;
    const { title, author, price, categoryid } = req.body;
    const newBookObject = { title, author, price, categoryid };
    try {
        await db_books.post_book(newBookObject, id++ );
        res.status(201).json({ message: 'Book created', id });
    } catch (error) {
        res.status(500).json({ message: 'Problem posting your book', error: error.message });
    }
}); 
router.put('/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { title, author, price, categoryid } = req.body;
    const updatedBook = { title, author, price, categoryid };
    try {
        await db_books.edit_book(updatedBook, Number(id));
        res.status(201).json({ message: 'Book edited'});
    } catch (error) {
        res.status(500).json({ message: 'Problem editing your book', error: error.message });
    }
}); 
router.delete('/:id/delete', async (req, res) => {
    const { id } = req.params;
    try {
        const book = await db_books.delete_book(Number(id));
        res.json({ message: 'Book deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Problem deleting one book', error: error.message });
    }
});
export default router;