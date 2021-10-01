import User from './../models/user.js';

const getUsers = () => User.find({});

const createUser = (data) => User.create(data);

const getUserById = (id) => User.findById(id);

const editUser = async (id, data) => {
  const user = await User.findById(id);

  return User.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        ...user,
        ...data,
      },
    },
    { new: true }
  );
};

const deleteUser = (id) => User.deleteOne({ _id: id });

export default { getUsers, createUser, getUserById, editUser, deleteUser };
