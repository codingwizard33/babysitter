import User from "../models/User.js";

const userResource = async (req) => {
  const user = await User.findOne({ _id: req }).populate('role');

  const userData = {
    _id: user._id,
    fullName: user.fullName,
    email: user.email,
    age: user.age,
    avatar: user.avatar,
    address: user.address,
    role: user.role.role,
    createdAt: user.createdAt,
    verifiedAt: user.verifiedAt
  };

  return userData;
};

export { userResource };