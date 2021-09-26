import * as express from 'express';
import db_users from '../../db/queries/users';
import { generateHash } from '../../utils/passwords';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if(!email || !password){
            res.json({ message: "Fill out all required fields"});
            return;
        }
        let id = 0;
        const hashed = generateHash(password);
        const newUser = { id: id++, email, password: hashed, name, role: 'guest' };
        const register = await db_users.insert(newUser);
        res.json(register);
    } catch (error) {
        res.status(500).json({ message: 'Login Error' })
    }
});

export default router;