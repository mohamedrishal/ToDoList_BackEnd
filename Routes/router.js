const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");
const todosController = require("../Controllers/todosController");
const jwtMiddleware = require("../Middlewares/jwtMiddleware");

// register API
router.post("/user/register", userController.register);

// login
router.post("/user/login", userController.login);

// add-project
router.post("/projects/add", jwtMiddleware, todosController.addtodos  );

// getuserprojects
router.get('/user/all-projects',jwtMiddleware,todosController.allUserTodos)


// editProject 
router.put('/projects/edit/:id',jwtMiddleware,todosController.editTodosController)


// deleteProject
router.delete('/projects/remove/:id',jwtMiddleware,todosController.deleteTodosController)

module.exports = router;
