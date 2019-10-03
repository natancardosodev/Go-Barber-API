import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'User not found.' });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match.' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, '1819b6ca8028a2a890f63dc810cbee97', {
                expiresIn: '7d',
            }), // generated in www.md5online.org
        });
    }
}

export default new SessionController();
