import express from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  editUser,
  deleteUser,
} from './controller.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;
