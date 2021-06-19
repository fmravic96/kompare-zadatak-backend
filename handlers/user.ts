import models from "../models/";

const { User } = models;

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(400).json({ error: err.toString() });
  }
};

export const createUser = async (req: any, res: any) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
    });
    await user.save();
    return res.status(201).json({ ...user._doc });
  } catch (err) {
    return res.status(400).json({ error: err.toString() });
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.body;
    const user = await User.findById(id);
    if (!user) throw new Error("No user found.");
    await user.remove();
    return res.status(202).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.toString() });
  }
};
