import userService from './service.js';

const getUsers = (_, res) =>
  userService.getUsers().then((users) => res.send(users));

const getUserById = (req, res) =>
  userService.getUserById(req.params.id).then((user) => res.send(user));

const createUser = (req, res) =>
  userService.createUser(req.body).then((newUser) => res.send(newUser));

const editUser = (req, res) =>
  userService
    .editUser(req.params.id, req.body)
    .then((edited) => res.send(edited));

const deleteUser = (req, res) =>
  userService.deleteUser(req.params.id).then((deleted) => res.send(deleted));

export { getUsers, createUser, getUserById, editUser, deleteUser };
