import bcrypt from "bcrypt";

import User from "../../models/User.js";

const confirmPasswordService = async (req) => {
  const user = await User.findOne({ email: req.email });

  const confirm = await bcrypt.compare(req.password, user.password);

  return confirm;
};

export { confirmPasswordService };