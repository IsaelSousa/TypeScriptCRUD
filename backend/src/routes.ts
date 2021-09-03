import { Router } from 'express';
import userRegisterController from './controllers/userRegisterController';

const router = Router();

router.get('/users', userRegisterController.index);
router.post('/login', userRegisterController.login)
router.post('/register', userRegisterController.register);
router.patch('/update/:id', userRegisterController.update);
router.delete('/delete/:id', userRegisterController.delete);

export { router }