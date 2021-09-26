import * as express from 'express';
import db_cat from '../../db/queries/categories';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await db_cat.get_categories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all categories', error: error.message });
    }
});
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const category = await db_cat.get_one_category(Number(id));
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching one category', error: error.message });
    }
});

export default router;