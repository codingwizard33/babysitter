import bcrypt from "bcrypt";

import User from "../../models/User.js";
import Role from "../../models/Role.js";

const createUserService = async (req) => {
  try {
    const role = await Role.findOne({ role: req.role });

    const newUser = await User.create({
      fullName: req.fullName,
      email: req.email,
      password: await bcrypt.hash(req.password, 10),
      age: req.age,
      avatar: req.avatar,
      address: req.address,
      location: {
        longitude: req.location.longitude,
        latitude: req.location.latitude
      },
      role: role
    });

    return newUser;
  } catch (error) {
    return error.message;
  }
};

export { createUserService };