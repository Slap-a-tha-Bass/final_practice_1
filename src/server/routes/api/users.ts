import * as express from 'express';
import db_users from '../../db/queries/users';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await db_users.get_users();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Problem fetching all users', error: error.message });
    }
});

export default router;