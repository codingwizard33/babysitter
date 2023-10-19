import User from "../models/User.js";

const userResource = async (req) => {
  const user = await User.findOne({ email: req }).populate('role');

  const userData = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    age: user.age,
    avatar: user.avatar,
    address: user.address,
    role: user.role.role,
    createdAt: user.createdAt
  };

  return userData;
};

export { userResource };