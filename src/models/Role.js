import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

roleSchema.pre('save', async function (next) {
  const Role = this.model('Role');
  const existingRole = await Role.findOne({ role: this.role });
  if (existingRole) {
    const error = new Error('Roles already exists.');
    return next(error);
  }
  next();
});

export default mongoose.model('Role', roleSchema);