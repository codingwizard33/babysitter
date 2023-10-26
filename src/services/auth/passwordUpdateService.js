import bcrypt from "bcrypt";

import User from "../../models/User.js";

const passwordUpdateService = async (userId, req) => {
  const password = await bcrypt.hash(req.password, 10);
  await User.updateOne({ _id: userId }, { $set: { password: password } });

  return true;
};

export { passwordUpdateService };