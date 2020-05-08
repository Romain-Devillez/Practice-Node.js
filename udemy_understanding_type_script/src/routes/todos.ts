import { Router } from 'express';
import { createTodo, getTodos, updateTodo} from "../Controllers/todos";

const router = Router();

router.post('/', createTodo);

router.post('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id');


export default router;
