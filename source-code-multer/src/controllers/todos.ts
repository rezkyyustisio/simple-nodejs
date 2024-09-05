import { RequestHandler, response } from 'express';
import { Todo } from '../models/todos';
const TODOS: Todo[] = [];
export const createTodos:RequestHandler = (req, res, next) => {
  const text = (req.body as { text:string } ).text; // making it  string type
  // const text = req.body.text; //typeScript is not allowing :any type
  const id = Math.random().toString();
  const newTodo = new Todo(id, text);
  TODOS.push(newTodo);
  res.status(201).json({message: 'Todo created successfully',   createdTodo: newTodo});
};