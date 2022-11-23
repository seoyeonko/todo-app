const express = require('express');
const { Todo } = require('../models');
const { Op } = require('sequelize');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('메인 페이지');
});

// GET /todos - show all todos (READ)
router.get('/todos', async (req, res) => {
  let todos = await Todo.findAll();

  res.send(todos);
});

// GET /todo/:todoId - show a specific todo (READ ONE)
router.get('/todo/:todoId', async (req, res) => {
  let todo = await Todo.findOne({
    where: {
      id: { [Op.eq]: req.params.todoId },
    },
    // raw: true,
  });

  // 조회 결과 없음
  if (todo === null) {
    return res.send(false);
  }

  res.send(todo);
});

// POST /todo - create a new todo (CREATE)
router.post('/todo', async (req, res) => {
  console.log(req.body);
  let newTodo = await Todo.create({
    todo: req.body.todo,
    completed: req.body.completed,
  });

  res.send(newTodo);
});

// PATCH /todo/:todoId - edit a specific todo (UPDATE)
router.patch('/todo/:todoId', async (req, res) => {
  // 배열 구조 분해
  // [isUpdated] = [ 0 ] or [ 1 ]
  let [idUpdated] = await Todo.update(
    {
      todo: req.body.todo,
      completed: req.body.completed,
    },
    {
      where: {
        id: { [Op.eq]: req.params.todoId },
      },
      // raw: true,
    }
  );
  // console.log(idUpdated); // 0 or 1

  // 수정 실패
  if (idUpdated === 0) {
    return res.send(false);
  }

  // 수정 성공
  res.send(true);
});

// DELETE /todo/:todoId - remove a specific todo (DELETE)
router.delete('/todo/:todoId', async (req, res) => {
  let isDeleted = await Todo.destroy({
    where: {
      id: { [Op.eq]: req.params.todoId },
    },
    raw: true,
  });
  // console.log(isDeleted); // 0 or 1

  // 삭제 실패
  if (!isDeleted) {
    return res.send(false);
  }

  // 삭제 성공
  res.send(true);
});

module.exports = router;
